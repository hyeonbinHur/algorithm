const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const n = +input[0];

for (let i = 0; i < n; i++) {
    const s = input[1 + i].split(' ');
    console.log(`Case #${i + 1}: ${+s[0] + +s[1]}`);
}
