const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ');
const ans = (input) => {
    console.log(Number(input[0] + input[1]) + Number(input[2] + input[3]));
};

ans(input);
