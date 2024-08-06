const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1);

let arr = input
    .join(', ')
    .split(' ')
    .map((i) => parseInt(i, 10));
arr = arr.sort((a, b) => a - b).join('\n');
console.log(arr);
