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
    const q = [...input];

    const map = new Map(arr.map((e) => [e[0], e[1]]));

    const result = [];
    for (let i = 0; i < q.length; i++) {
        const val = q[i];
        result.push(map.get(val));
    }
    console.log(result.join('\n'));
};

ans();
