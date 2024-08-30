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
const result = [];

const backTrackin = (k, last) => {
    if (k === m) {
        let current = '';
        for (let i = 0; i < k; i++) {
            current += arr[i] + ' ';
        }
        result.push(current);
        return;
    }

    for (let i = last; i < nums.length; i++) {
        arr[k] = nums[i];
        backTrackin(k + 1, i);
    }
};

backTrackin(0, 0);
const set = [...new Set(result)];
console.log(set.join('\n'));
