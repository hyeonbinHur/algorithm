const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));
const ans = () => {
    const [n, m] = input
        .shift()
        .split(' ')
        .map((e) => Number(e));

    const map = new Map(input.map((e, i) => [e, i]));
    const newArr = Array.from(map);
    newArr.sort((a, b) => a[1] - b[1]);
    newArr.map((e, i) => {
        if (i < n) {
            console.log(e[0]);
        }
    });
};

ans();
