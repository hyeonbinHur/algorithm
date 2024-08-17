const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    const ans = [];
    ans.push(0);
    ans.push(0);

    for (let i = 2; i <= +input; i++) {
        ans[i] = ans[i - 1] + 1;
        if (i % 2 === 0) {
            ans[i] > ans[i / 2] + 1
                ? (ans[i] = ans[i / 2] + 1)
                : (ans[i] = ans[i]);
        }

        if (i % 3 === 0) {
            ans[i] > ans[i / 3] + 1
                ? (ans[i] = ans[i / 3] + 1)
                : (ans[i] = ans[i]);
        }
    }

    console.log(ans[+input]);
};
ans(input);
