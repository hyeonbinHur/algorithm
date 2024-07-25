const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');
const number = +input[0];

let count = 1;
let current = 1;
while (1) {
    if (number <= current) break;
    current = current + count * 6;
    count++;
}

console.log(count);
