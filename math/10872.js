const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    let ans = 1;
    for (let i = 1; i <= +input; i++) {
        ans *= i;
    }
    console.log(ans);
};
ans(input);
