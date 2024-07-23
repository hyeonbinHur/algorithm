const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let num = +input[0];
let scores = input[1].split(' ').map(Number);
let highest = Math.max(...scores);
let newScores = scores.map((i) => (i / highest) * 100);
let total = newScores.reduce((acc, cur) => {
    return acc + cur;
}, 0);
console.log(total / num);
