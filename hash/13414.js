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

    const arr = [...input];
    const map = new Map(arr.map((e, i) => [e, i]));
    const result = Array.from(map).sort((a, b) => a[1] - b[1]);
    result.splice(0, n).map((e) => {
        console.log(e[0]);
    });
};
ans();
