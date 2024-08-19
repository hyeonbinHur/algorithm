const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0];

const ans = (input) => {
    const ans = Array.from(Array(+input + 1), () => new Array());
    ans[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    ans[2] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 3; i <= +input; i++) {
        for (let j = 0; j < ans[i - 1].length; j++) {
            const value = [...ans[i - 1]];
            ans[i][j] =
                value.slice(0, j + 1).reduce((acc, cur) => acc + cur) % 10007;
        }
    }
    console.log(ans[+input].reduce((acc, cur) => acc + cur) % 10007);
};
ans(input);
