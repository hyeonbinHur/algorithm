const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const [n, m] = input[0];
const nums = input[1].sort((a, b) => a - b);
const arr = Array(m + 1).fill(0);
const used = Array(n + 1).fill(false);
const result = [];

const backTrackin = (k) => {
    if (k === m) {
        let current = [];
        for (let i = 0; i < m; i++) {
            current.push(arr[i]);
        }
        result.push(current);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            arr[k] = nums[i];
            used[i] = true;
            backTrackin(k + 1);
            used[i] = false;
        }
    }
};
backTrackin(0);
console.log(result.map((e) => e.join(' ')).join('\n'));
