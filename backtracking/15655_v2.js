const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const [n, m] = input.shift();
const arr = input.shift().sort((a, b) => a - b);

const ans = [];
const result = [];
const visit = Array(n).fill(false);
const backtrackin = (k, start) => {
    if (k === m) {
        result.push(ans.join(' '));
    } else {
        for (let i = start; i < arr.length; i++) {
            if (visit[i] === false) {
                ans[k] = arr[i];
                visit[i] = true;
                backtrackin(k + 1, i + 1);
                visit[i] = false;
            }
        }
    }
};

backtrackin(0, 0);
console.log(result.join('\n'));
