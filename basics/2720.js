const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let Q,
    D,
    N,
    P = 0;

for (let i = 1; i < input.length; i++) {
    let current = +input[i];
    Q = parseInt(current / 25);
    current -= Q * 25;
    D = parseInt(current / 10);
    current -= D * 10;
    N = parseInt(current / 5);
    current -= N * 5;
    P = parseInt(current / 1);
    current -= P;

    console.log(Q, D, N, P);
}
console.log(205 - 16);
