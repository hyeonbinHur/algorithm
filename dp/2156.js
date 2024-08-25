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
    dp[0] = input[0];
    dp[1] = input[0] + input[1];
    dp[2] = Math.max(
        dp[1],
        input[0] + input[1],
        input[1] + input[2],
        input[0] + input[2]
    );

    for (let i = 3; i < input.length; i++) {
        dp[i] = Math.max(
            dp[i - 3] + input[i - 1] + input[i],
            dp[i - 1],
            dp[i - 2] + input[i]
        );
    }
    console.log(dp[input.length - 1]);
};

ans(input);
