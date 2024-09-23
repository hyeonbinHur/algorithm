const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)))
    .sort((a, b) => a[0] - b[0])
    .sort((a, b) => a[1] - b[1]);

const ans = () => {
    let count = 0;
    let lastEnd = -1;
    for (let i = 0; i < input.length; i++) {
        let currentStart = input[i][0];
        let currentEnd = input[i][1];
        if (currentStart >= lastEnd) {
            lastEnd = currentEnd;
            count++;
        }
    }
    console.log(count);
};
ans();
