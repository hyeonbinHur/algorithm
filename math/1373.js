const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    console.log(parseInt(input, 2).toString(8));
};

ans(input);
