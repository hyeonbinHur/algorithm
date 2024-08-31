const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => Number(e));

const result = [];

const hanoi = (n, start, mid, end) => {
    if (n === 1) {
        result.push(`${start} ${end}`);
        return;
    }
    hanoi(n - 1, start, end, mid);
    result.push(`${start} ${end}`);
    hanoi(n - 1, mid, start, end);
};

if (input[0] === 1) {
    console.log(1);
    console.log('1 3');
} else {
    hanoi(input[0], 1, 2, 3);
    console.log(result.length);
    console.log(result.join('\n'));
}
