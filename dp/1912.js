const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ')
    .map((e) => Number(e));
const ans = (input) => {
    const dp = [];
    dp[0] = input[0];
    for (let i = 1; i < input.length; i++) {
        dp[i] = input[i];
        if (dp[i - 1] + dp[i] > dp[i]) {
            dp[i] = dp[i - 1] + dp[i];
        }
    }
    console.log(Math.max(...dp));
};
ans(input);
