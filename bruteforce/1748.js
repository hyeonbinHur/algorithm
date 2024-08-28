const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    let count = +input;
    for (let i = 10; i <= 100000000; i *= 10) {
        if (+input - i < 0) {
            break;
        } else {
            count += +input - i + 1;
        }
    }
    console.log(count);
};
ans(input);
