const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const n = input[0].split(' ')[0];
const k = input[0].split(' ')[1];

let arr = input[1].split(' ');
arr.sort((a, b) => b - a);
console.log(arr[k - 1]);
