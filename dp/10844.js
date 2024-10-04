const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = () => {
    const n = +input[0];
    const dp = [];
    dp[1] = [];
    dp[1][0] = 0;
    for (let i = 1; i <= 9; i++) {
        dp[1][i] = 1;
    }

    for (let i = 2; i <= n; i++) {
        dp[i] = [];
        dp[i][0] = dp[i - 1][1] % 1000000000;
        dp[i][9] = dp[i - 1][8] % 1000000000;
        for (let j = 1; j <= 8; j++) {
            dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
        }
    }

    const ans = dp[n].reduce((a, b) => (a + b) % 1000000000, 0);
    console.log(ans);
};
ans();
