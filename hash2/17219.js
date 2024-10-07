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
    const arr = input.splice(0, n).map((e) => e.split(' '));
    const map = new Map(arr.map((e) => [e[0], e[1]]));
    const result = [];
    for (let i = 0; i < input.length; i++) {
        result.push(map.get(input[i]));
    }
    console.log(result.join('\n'));
};

ans();
