const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ')
    .map((e) => Number(e));
const [n, m] = input;
const arr = [];
const result = [];
const backTrackin = (k) => {
    if (k === m) {
        result.push(arr.join(' '));
    } else {
        for (let i = 1; i <= n; i++) {
            arr[k] = i;
            backTrackin(k + 1);
        }
    }
};

backTrackin(0);
console.log(result.join('\n'));
