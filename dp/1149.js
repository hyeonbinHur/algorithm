const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));
const ans = (input) => {
    const dp = [];
    dp[0] = input[0];
    for (let i = 1; i < input.length; i++) {
        dp[i] = [];
        for (let j = 0; j < input[i].length; j++) {
            dp[i][j] = Infinity;
            for (let k = 0; k < dp[i - 1].length; k++) {
                if (j !== k) {
                    if (dp[i][j] > input[i][j] + dp[i - 1][k])
                        dp[i][j] = input[i][j] + dp[i - 1][k];
                }
            }
        }
    }
    console.log(Math.min(...dp[input.length - 1]));
};
ans(input);
