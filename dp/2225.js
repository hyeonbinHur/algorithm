const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ');

const ans = (input) => {
    const [n, k] = input;
    const dp = [];
    dp[0] = [];
    for (let i = 0; i <= +n; i++) {
        dp[0][i] = 1;
    }
    for (let i = 1; i < +k; i++) {
        dp[i] = [];
        for (let j = 0; j <= +n; j++) {
            dp[i][j] = 0;
            for (let q = 0; q <= j; q++) {
                dp[i][j] = (dp[i][j] + dp[i - 1][q]) % 1000000000;
            }
        }
    }
    console.log(dp[k - 1][n]);
};

ans(input);
