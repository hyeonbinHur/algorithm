/**
 * 2 -> 3-> 5 -> 9 -> 17 ->
 */

const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

const number = +input[0];

let start = 2;

for (let i = 0; i < number; i++) {
    start = start * 2 - 1;
}
console.log(start * start);
