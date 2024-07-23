const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
let num1 = input[0].split(' ')[0].split('').reverse();
let num2 = input[0].split(' ')[1].split('').reverse();

let num3 = [+num1.join(''), +num2.join('')];
console.log(Math.max(...num3));
