let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');

let a = +input[0];
let b = +input[1];
let c = +input[2];
console.log(a + b + c);
