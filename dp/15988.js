const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => Number(e));

const ans = (input) => {
    const MOD = 1000000009;
    const max = Math.max(...input);
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= max; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % MOD;
    }
    for (let i = 0; i < input.length; i++) {
        console.log(dp[input[i]] % MOD);
    }
};
ans(input);
