const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let arr = Array(42).fill(0);

for (let i = 0; i < 10; i++) {
    const num = +input[i];
    arr[num % 42] = 1;
}
let count = 0;
for (let i = 0; i <= 41; i++) {
    if (arr[i] === 1) count++;
}
console.log(count);
