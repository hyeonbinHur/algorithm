const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

let arr = Array(6).fill(0);
let used;
let nums;
let result = [];

const backTrackin = (k, last) => {
    if (k === 6) {
        let current = '';
        for (let i = 0; i < 6; i++) {
            current += arr[i] + ' ';
        }
        result.push(current);
    }

    for (let i = last; i < nums.length; i++) {
        if (!used[i]) {
            arr[k] = nums[i];
            used[i] = true;
            backTrackin(k + 1, i);
            used[i] = false;
        }
    }
};

const ans = () => {
    for (let i = 0; i < input.length - 1; i++) {
        used = Array(arr.length).fill(false);
        nums = input[i].slice(1);
        backTrackin(0, 0);
        console.log(result.join('\n') + '\n');
        result = [];
    }
};
ans();
