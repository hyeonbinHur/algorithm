const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const meetings = [];
    for (let i = 0; i < input.length; i++) {
        const [start, end] = input[i];
        meetings.push([start, 1]);
        meetings.push([end, -1]);
    }
    meetings.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    let ans = 0;
    let max = 0;
    for (let i = 0; i < meetings.length; i++) {
        ans += meetings[i][1];
        max = Math.max(ans, max);
    }
    console.log(max);
};
ans();
