const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

let count = 0;
for (let i = 0; i <= +input; i++) {
    count += i;
}
console.log(count);
