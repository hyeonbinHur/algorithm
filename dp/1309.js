const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ')[0];
const ans = (input) => {
    const dp = [];
    dp[0] = 3;
    dp[1] = 7;
    for (let i = 2; i < +input; i++) {
        dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
    }
    console.log(dp[+input - 1]);
};
ans(input);
