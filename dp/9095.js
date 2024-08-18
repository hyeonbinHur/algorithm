const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => Number(e))
    .slice(1);
const ans = (input) => {
    const dp = [];
    const max = Math.max(...input);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for (let i = 4; i <= max; i++) {
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }
    for (let i = 0; i < input.length; i++) {
        console.log(dp[input[i]]);
    }
};

ans(input);
