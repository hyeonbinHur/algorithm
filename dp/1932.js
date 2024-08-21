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
    dp[0] = [];
    dp[0][0] = input[0][0];
    for (let i = 1; i < input.length; i++) {
        dp[i] = [];
        for (let j = 0; j < input[i].length; j++) {
            dp[i][j] = 0;
            for (let k = j - 1; k < j + 1; k++) {
                if (j === 0) {
                    dp[i][j] = input[i][j] + dp[i - 1][0];
                } else if (j === input[i].length - 1) {
                    dp[i][j] = input[i][j] + dp[i - 1][k - 1];
                } else {
                    if (dp[i][j] < input[i][j] + dp[i - 1][k]) {
                        dp[i][j] = input[i][j] + dp[i - 1][k];
                    }
                }
            }
        }
    }
    console.log(Math.max(...dp[input.length - 1]));
};
ans(input);
