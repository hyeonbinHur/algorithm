const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const n = input[0].split(' ')[0];
const arr = new Set(input.slice(1, +n + 1));
let ans = 0;
for (let i = +n + 1; i < input.length; i++) {
    if (arr.has(input[i])) ans++;
}
console.log(ans);
