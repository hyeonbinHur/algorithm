const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => Number(e));

const ans = () => {
    const g = input[0];

    let current = 2;
    let old = 1;
    let count = 0;
    const result = [];

    while (old < 50000) {
        const val = current ** 2 - old ** 2;
        if (val === g) {
            result.push(current);
            count++;
            current++;
        } else if (val < g) {
            current++;
        } else {
            old++;
        }
    }
    if (count === 0) {
        console.log(-1);
    } else {
        console.log(result.join('\n'));
    }
};
ans();
