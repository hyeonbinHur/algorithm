const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => Number(e));

let arr = Array.from({ length: input[0] }, () =>
    Array(input[0] * 2 - 1).fill(' ')
);
const recursion = (colStart, rowStart, size) => {
    if (size === 3) {
        arr[rowStart][colStart + 2] = '*';
        arr[rowStart + 1][colStart + 1] = '*';
        arr[rowStart + 1][colStart + 3] = '*';
        for (let i = colStart; i < colStart + 5; i++) {
            arr[rowStart + 2][i] = '*';
        }
        return;
    }
    recursion(colStart + size / 2, rowStart, size / 2); // first zone
    recursion(colStart, rowStart + size / 2, size / 2); // second zone
    recursion(colStart + size, rowStart + size / 2, size / 2); // third zones
};

recursion(0, 0, input[0]);
console.log(arr.map((e) => e.join('')).join('\n'));
