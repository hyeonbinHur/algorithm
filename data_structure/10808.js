const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split('');

const ans = (input) => {
    const ans = Array(26).fill(0);
    input.forEach((e) => {
        ans[e.charCodeAt() - 97]++;
    });

    console.log(ans.join(' '));
};

ans(input);
