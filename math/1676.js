const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    let ans = 0;
    ans += parseInt(+input / 5);
    ans += parseInt(+input / 25);
    ans += parseInt(+input / 125);
    console.log(ans);
};
ans(input);
