const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))[0]
    .split(' ')
    .map((e) => Number(e));

const ans = (input) => {
    const dp = [];
    for (let i = input.length - 1; i >= 0; i--) {
        dp[i] = 1;
        for (let j = i; j < input.length; j++) {
            if (input[i] > input[j]) {
                dp[i] < dp[j] + 1 ? (dp[i] = dp[j] + 1) : (dp[i] = dp[i]);
            }
        }
    }
    console.log(Math.max(...dp));
};
ans(input);
