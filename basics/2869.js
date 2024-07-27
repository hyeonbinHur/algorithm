const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

const A = +input[0];
const B = +input[1];
const V = +input[2] - A;

if ((V / (A - B)) % 1 !== 0) {
    console.log(parseInt(V / (A - B)) + 2);
} else {
    console.log(parseInt(V / (A - B)) + 1);
}
