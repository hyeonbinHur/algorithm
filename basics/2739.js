const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

let count = 1;
const inputN = +input[0];

while (1) {
    if (count === 10) break;
    let number = inputN * count;
    console.log(`${inputN} * ${count} = ${number}`);
    count++;
}
