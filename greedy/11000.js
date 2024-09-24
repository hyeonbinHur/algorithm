const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const time = [];
    input.map((e) => {
        time.push([e[0], 1]), time.push([e[1], -1]);
    });
    time.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    let result = 0;
    let max = 0;
    for (let i = 0; i < time.length; i++) {
        result += time[i][1];
        max = Math.max(max, result);
    }
    console.log(max);
};

ans();
