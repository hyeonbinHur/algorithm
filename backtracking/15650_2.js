const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => Number(e));

const [n, m] = input;
const arr = [];
const result = [];
const visited = Array(n + 1).fill(false);

const backTrackin = (val, k) => {
    if (k === m) {
        result.push(arr.join(' '));
    } else {
        for (let i = val; i <= n; i++) {
            if (visited[i] === false) {
                arr[k] = i;
                visited[i] = true;
                backTrackin(i, k + 1);
                visited[i] = false;
            }
        }
    }
};
backTrackin(1, 0);
console.log(result.join('\n'));
