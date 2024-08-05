const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');
let count = 0;
let number = 666;

while (1) {
    if (String(number).includes('666')) count++;
    if (count === Number(input[0])) break;
    number++;
}
console.log(number);
