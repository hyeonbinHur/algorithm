const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

let N = +input[0];
let B = +input[1];
let number = [];
let Q = N;
let R = 0;

while (1) {
    if (parseInt(Q / B) === 0) {
        if (Q > 9) {
            number.unshift(String.fromCharCode(Q + 55));
        } else {
            number.unshift(Q);
        }
        break;
    }
    R = parseInt(Q % B);
    Q = parseInt(Q / B);
    if (R > 9) {
        number.unshift(String.fromCharCode(R + 55));
    } else {
        number.unshift(R);
    }
}

console.log(number.join(''));
