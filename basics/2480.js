const fs = require('fs');
const input = fs.readFileSync('./dev/stdin.txt').toString().trim().split(' ');
const A = +input[0];
const B = +input[1];
const C = +input[2];
let arr = [A, B, C];
arr.sort((a, b) => a - b);
let prize = 0;
if (arr[0] === arr[1] && arr[1] === arr[2]) {
    prize = 10000 + arr[0] * 1000;
} else if (arr[0] === arr[1] || arr[1] === arr[2]) {
    prize = 1000 + arr[1] * 100;
} else {
    prize = arr[2] * 100;
}
console.log(prize);
