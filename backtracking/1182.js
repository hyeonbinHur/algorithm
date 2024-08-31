const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const [n, s] = input[0];
const nums = input[1];
const arr = [];
const result = [];
const backTrackin = (k, last) => {
    // console.log(arr.reduce((prev, next) => prev + next, 0));

    if (arr.reduce((prev, next) => prev + next, 0) === s) {
        let current = '';
        for (let i = 0; i < arr.length; i++) {
            current += arr[i] + ' ';
        }
        result.push(current);
        return;
    }
    if (k === n) {
        while (1) {
            if (arr.length === 0) break;
            arr.pop();
        }
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[last]);
        backTrackin(k + 1, last + 1);
    }
};
backTrackin(0, 0);
const set = [...new Set(result)];
console.log(set.length);
