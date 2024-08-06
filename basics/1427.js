const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('');

let arr = input
    .join('')
    .split('')
    .map((i) => parseInt(i, 10))
    .sort((a, b) => b - a)
    .join('');

console.log(arr);
