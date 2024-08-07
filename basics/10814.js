const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.split(' ').map((e2) => e2.replace('\r', '')));

let arr = input.map((e) => [Number(e[0]), e[1]]);
arr = arr
    .sort((a, b) => a[0] - b[0])
    .map((e) => {
        console.log(e.join(' '));
    });
