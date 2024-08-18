const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
const ans = (input) => {
    const ans = [];

    ans[1] = 1;
    ans[2] = 2;

    for (let i = 3; i <= +input; i++) {
        ans[i] = (ans[i - 1] + ans[i - 2]) % 10007;
    }
    console.log(ans[+input]);
};
ans(input);
