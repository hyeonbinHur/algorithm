const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const given = +input[0];
let count = 0;
let i = 1;
while (1) {
    count += i;
    if (given <= count) {
        break;
    }
    i++;
}
const start = count + 1 - i;
const number = given - start;
if (i % 2 === 0) {
    console.log(`${1 + number}/${i - number}`);
} else if (i % 2 === 1) {
    console.log(`${i - number}/${1 + number}`);
}
