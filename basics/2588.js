let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

let a = +input[0];
let b = input[1];

let first = a * b[0];
let second = a * b[1];
let third = a * b[2];

console.log(third);
console.log(second);
console.log(first);
console.log(third + second * 10 + first * 100);
