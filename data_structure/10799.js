const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('');

const ans = (input) => {
    let current = 0;
    let ans = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' && input[i + 1] !== ')') {
            current++;
        }
        if (input[i] === ')' && input[i - 1] !== '(') {
            current--;
            ans++;
        }
        if (input[i] === ')' && input[i - 1] === '(') {
            ans += current;
        }
    }
    console.log(ans);
};
ans(input);
