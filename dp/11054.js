const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ')
    .map((e) => Number(e));
const ans = (input) => {
    const dpRight = [];
    dpRight[input.length - 1] = 1;
    const dpLeft = [];
    dpLeft[0] = 1;
    const dp = [];
    for (let i = 1; i < input.length; i++) {
        dpLeft[i] = 0;
        for (let j = 0; j < i; j++) {
            dpLeft[j - 1];
            if (input[i] > input[j] && dpLeft[i] < dpLeft[j]) {
                dpLeft[i] = dpLeft[j];
            }
        }
        dpLeft[i]++;
    }
    for (let i = input.length - 2; i >= 0; i--) {
        dpRight[i] = 0;
        for (let j = input.length - 1; j > i; j--) {
            dpRight[j - 1];
            if (input[i] > input[j] && dpRight[i] < dpRight[j]) {
                dpRight[i] = dpRight[j];
            }
        }
        dpRight[i]++;
    }
    for (let i = 0; i < input.length; i++) {
        dp[i] = dpLeft[i] + dpRight[i];
    }
    console.log(Math.max(...dp) - 1);
};
ans(input);
