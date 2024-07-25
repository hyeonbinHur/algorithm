const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

const N = input[0];
const B = +input[1];
let num = 0;
for (let i = 0; i < N.length; i++) {
    let current = +N[i];
    if (isNaN(current)) {
        current = N[i].charCodeAt(0) - 55;
    }
    num += current * B ** (N.length - 1 - i);
}
console.log(num);
