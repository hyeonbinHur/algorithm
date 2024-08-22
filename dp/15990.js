const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => Number(e));

const ans = (input) => {
    const dp = [];
    dp[1] = [1, 0, 0];
    dp[2] = [0, 1, 0];
    dp[3] = [1, 1, 1];
    const max = Math.max(...input);
    const ans = [];
    for (let i = 4; i <= max; i++) {
        dp[i] = [];
        dp[i][0] = (dp[i - 1][1] + dp[i - 1][2]) % 1000000009;
        dp[i][1] = (dp[i - 2][0] + dp[i - 2][2]) % 1000000009;
        dp[i][2] = (dp[i - 3][0] + dp[i - 3][1]) % 1000000009;
    }
    for (let i = 0; i < input.length; i++) {
        console.log(
            (dp[input[i]][0] + dp[input[i]][1] + dp[input[i]][2]) % 1000000009
        );
    }
};

ans(input);
