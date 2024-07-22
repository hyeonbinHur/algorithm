const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
let num = input.map((i) => Number(i));
let max = Math.max(...num);
console.log(max);
console.log(num.indexOf(max) + 1);
