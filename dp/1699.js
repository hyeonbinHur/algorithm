const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0];

const ans = (input) => {
    const dp = [];

    for (let i = 0; i <= +input; i++) {
        dp[i] = i;
        for (let j = 0; j <= Math.sqrt(i); j++) {
            dp[i] > dp[i - j * j] + 1
                ? (dp[i] = dp[i - j * j] + 1)
                : (dp[i] = dp[i]);
        }
    }
    console.log(dp[+input]);
};

ans(input);
