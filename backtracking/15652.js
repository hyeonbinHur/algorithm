const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ')
    .map((e) => Number(e));
const [n, m] = input;
const arr = [];
const result = [];
const backTrackin = (k, start) => {
    if (k === m) {
        result.push(arr.join(' '));
    } else {
        for (let i = start; i <= n; i++) {
            arr[k] = i;
            backTrackin(k + 1, i);
        }
    }
};
backTrackin(0, 1);
console.log(result.join('\n'));
