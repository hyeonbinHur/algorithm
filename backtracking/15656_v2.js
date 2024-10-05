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
const visit = Array(n).fill(false);
const result = [];

const backtrackin = (k) => {
    if (k === m) {
        result.push(ans.join(' '));
    } else {
        for (let i = 0; i < arr.length; i++) {
            ans[k] = arr[i];
            backtrackin(k + 1);
        }
    }
};
backtrackin(0);
console.log(result.join('\n'));
