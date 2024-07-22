const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
const index = +input[0];
const arr = input[1];
const f = input[2];
const cnt = arr.split(' ').filter((number) => number == f).length;
console.log(cnt);
