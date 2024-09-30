const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const arr = input[0].sort((a, b) => a - b);
    const target = input[1][0];

    let start = 0;
    let end = arr.length - 1;
    let count = 0;
    while (start < end) {
        const current = arr[start] + arr[end];

        if (target === current) {
            count++;
            start++;
        } else if (target > current) {
            start++;
        } else {
            end--;
        }
    }
    console.log(count);
};

ans();
