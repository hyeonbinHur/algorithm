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
    const arr = input.map((e) => Number(e)).sort((a, b) => a - b);
    let start = 0;
    let end = 1;
    let min = Infinity;
    while (start <= end && end < n) {
        const val = arr[end] - arr[start];
        if (val === m) {
            min = val;
            break;
        }
        if (val < m) {
            end++;
        } else {
            min = Math.min(val, min);
            start++;
        }
    }
    console.log(min);
};

ans();
