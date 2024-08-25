const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) =>
        e
            .replace('\r', '')
            .split(' ')
            .map((e2) => Number(e2))
    );

const ans = (input) => {
    // simple create dp array 3 times and find smallest values

    let ans = [];
    for (let i = 0; i < 3; i++) {
        const dp = [];
        if (i === 0) {
            dp[0] = [input[0][0], Infinity, Infinity];
        } else if (i === 1) {
            dp[0] = [Infinity, input[0][1], Infinity];
        } else if (i === 2) {
            dp[0] = [Infinity, Infinity, input[0][2]];
        }

        for (let j = 1; j < input.length; j++) {
            dp[j] = [];
            for (let k = 0; k < 3; k++) {
                if (k === 0) {
                    dp[j][k] =
                        input[j][k] + Math.min(dp[j - 1][1], dp[j - 1][2]);
                } else if (k === 1) {
                    dp[j][k] =
                        input[j][k] + Math.min(dp[j - 1][0], dp[j - 1][2]);
                } else if (k === 2) {
                    dp[j][k] =
                        input[j][k] + Math.min(dp[j - 1][0], dp[j - 1][1]);
                }
            }
        }
        dp[input.length - 1][i] = Infinity;
        ans.push(Math.min(...dp[input.length - 1]));
    }

    // console.log(dp);
    console.log(Math.min(...ans));
};

ans(input);
