const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0];

const ans = () => {
    const num = +input;

    const dp = Array(num + 1).fill(Infinity);

    dp[num] = 0;
    for (let i = dp.length - 1; i >= 0; i--) {
        if (i % 3 === 0) {
            if (dp[i / 3] > dp[i] + 1) {
                dp[i / 3] = dp[i] + 1;
            }
        }
        if (i % 2 === 0) {
            if (dp[i / 2] > dp[i] + 1) {
                dp[i / 2] = dp[i] + 1;
            }
        }

        if (dp[i - 1] > dp[i] + 1) {
            dp[i - 1] = dp[i] + 1;
        }
    }
    console.log(dp[1]);
};
ans();
