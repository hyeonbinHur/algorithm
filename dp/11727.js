const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => Number(e));

const ans = (input) => {
    const dp = [];
    dp[1] = 1;
    dp[2] = 3;
    for (let i = 3; i <= +input; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
    }
    console.log(dp[+input[0]]);
};

ans(input);
