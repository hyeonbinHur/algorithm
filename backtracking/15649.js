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
const ans = (k) => {
    if (k === m) {
        let current = [];
        for (let i = 0; i < m; i++) {
            current.push(arr[i]);
        }
        result.push(current);
        return;
    }
    for (let i = 1; i <= n; i++) {
        if (used[i] === false) {
            arr[k] = i;
            used[i] = true;
            ans(k + 1);
            used[i] = false;
        }
    }
};
ans(0);
console.log(result.map((e) => e.join(' ')).join('\n'));
