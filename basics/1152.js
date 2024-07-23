const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
let count = 0;
for (let i = 0; i < input[0].length; i++) {
    if (input[0][i] === ' ') count++;
}
console.log(count + 1);
