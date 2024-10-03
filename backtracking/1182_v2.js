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

const result = [];
const arr = Array(n + 1).fill(0);
let count = 0;

const backTrackin = (k, last) => {
    let value = arr.reduce((prev, next) => prev + next, 0);
    if (value === s) {
        count++;
    }

    if (last === n) {
        arr.fill(0);
        return;
    }
    arr[k + 1] = nums[last + 1];
    backTrackin(k + 1, last + 1);
};

const ans = () => {
    for (let i = 0; i < n; i++) {
        arr[0] = nums[i];
        backTrackin(0, i);
    }
};

ans();
console.log(count);
