const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => Number(e));
let result = Array(input[0])
    .fill(0)
    .map((e) => (e = Array(input[0]).fill(' ')));
const star = (rStart, cStart, size) => {
    if (size === 1) {
        result[rStart][cStart] = '*';
        return;
    }
    let newSize = size / 3;
    star(rStart + 0, cStart + 0, newSize);
    star(rStart + 0, cStart + newSize, newSize);
    star(rStart + 0, cStart + size - newSize, newSize);
    star(rStart + newSize, cStart + 0, newSize);
    star(rStart + newSize, cStart + size - newSize, newSize);
    star(rStart + newSize * 2, cStart + 0, newSize, newSize);
    star(rStart + newSize * 2, cStart + newSize, newSize);
    star(rStart + newSize * 2, cStart + size - newSize, newSize);
};
star(0, 0, input[0]);
console.log(result.map((e) => e.join('')).join('\n'));
