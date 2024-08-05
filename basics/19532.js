const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

const d = Number(input[3]);
const e = Number(input[4]);
const f = Number(input[5]);

for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
        if (a * i + b * j === c) {
            if (d * i + e * j === f) {
                console.log(i, j);
                break;
            }
        }
    }
}
