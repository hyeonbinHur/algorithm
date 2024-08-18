const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    const dp = [];
    dp[1] = 1;
    dp[2] = 1;
    for (let i = 3; i <= +input[0]; i++) {
        dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
    }
    console.log(BigInt(dp[+input[0]]).toString());
};
ans(input);
