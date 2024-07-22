const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let count = 0;
while (1) {
    if (input[count] === undefined) break;
    const s = input[count].split(' ');
    console.log(+s[0] + +s[1]);
    count++;
}
