const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)
    .map((e) => Number(e));

const ans = () => {
    const max = Math.max(...input);
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for (let i = 4; i <= max; i++) {
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }
    const ans = [];

    for (let i = 0; i < input.length; i++) {
        ans.push(dp[input[i]]);
    }
    console.log(ans.join('\n'));
};
ans();
