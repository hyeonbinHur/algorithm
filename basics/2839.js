const { copyFileSync } = require('fs');

const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

const number = Number(input[0]);
let result = 100000;

for (let i = 0; i <= 1000; i++) {
    let test = number;
    if (test - 5 * i >= 0) {
        test -= 5 * i;
    }

    if (test % 3 === 0) {
        if (test / 3 + i < result) {
            result = test / 3 + i;
        }
    }
}
if (result === 100000) {
    console.log(-1);
} else {
    console.log(result);
}
