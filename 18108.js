const fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().split('\n');
let a = input[0];
let a_length = a.length;
let b = input[1];
let b_length = b.length;
let num_b = +input[1];

console.log(a);
console.log(b);
