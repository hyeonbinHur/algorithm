const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ');

const ans = (input) => {
    const dp = [];
    for (let i = 0; i < input.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (+input[i] > +input[j]) {
                dp[i] > dp[j] + 1 ? (dp[i] = dp[i]) : (dp[i] = dp[j] + 1);
            }
        }
    }
    console.log(Math.max(...dp));
};
ans(input);
