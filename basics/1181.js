const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''));

let arr = [...new Set(input)];
arr = arr
    .sort()
    .sort((a, b) => a.length - b.length)
    .forEach((e) => console.log(e));
