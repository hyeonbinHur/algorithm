const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

let H = +input[0];
let M = +input[1];
let modM = M - 45;
if (modM < 0) {
    H--;
    modM = 60 + modM;
}
if (H < 0) {
    H = 24 + H;
}

console.log(H + ' ' + modM);
