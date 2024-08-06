const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let arr = [];
for (let i = 1; i <= input.length; i++) {
    arr.push(+input[i]);
}
arr.sort((a, b) => a - b);

for (let j = 0; j < arr.length - 1; j++) {
    console.log(arr[j]);
}
