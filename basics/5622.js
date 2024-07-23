const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const toSecond = (a) => {
    let result;
    if (a === 'S') {
        result = 8;
    } else if (a === 'V') {
        result = 9;
    } else if (a === 'Y' || a === 'Z') {
        result = 10;
    } else {
        result = Math.floor((a.charCodeAt(0) - 65) / 3 + 3);
    }
    return +result;
};
let second = 0;
for (let i = 0; i < input[0].length; i++) {
    second += toSecond(input[0][i]);
}
console.log(second);
