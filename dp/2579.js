const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)
    .map((e) => Number(e));

const ans = () => {
    const current = [...input];
    const dp = [];
    dp[0] = current[0];

    for (let i = 1; i < current.length; i++) {
        dp[i] = Math.max(
            current[i - 1] + current[i] + (dp[i - 3] ? dp[i - 3] : 0),
            (dp[i - 2] ? dp[i - 2] : 0) + current[i]
        );
    }

    console.log(dp[dp.length - 1]);
};
ans();
