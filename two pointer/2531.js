const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const ans = () => {
    const [n, d, k, c] = input
        .shift()
        .split(' ')
        .map((e) => Number(e));
};

ans();
