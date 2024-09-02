const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => Number(e));

const [n, m] = input;

const arr = Array(m + 1).fill(0);
const used = Array(n + 1).fill(false);
const result = [];

const backTrackin = (k) => {
    if (k === m) {
        let current = '';
        for (let i = 0; i < m; i++) {
            current += arr[i] + ' ';
        }
        result.push(current);
    }

    for (let i = 1; i <= n; i++) {
        if (used[i] === false) {
            arr[k] = i;
            used[i] = true;
            backTrackin(k + 1);
            used[i] = false;
        }
    }
};
backTrackin(0);
console.log(result.join('\n'));
