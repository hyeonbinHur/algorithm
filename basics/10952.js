const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let count = 0;
while (1) {
    const s = input[count].split(' ');
    if (+s[0] === 0 && +s[1] === 0) break;

    console.log(+s[0] + +s[1]);
    count++;
}
