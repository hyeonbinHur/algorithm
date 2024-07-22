const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const total = +input[0];
let calculatedPrice = 0;
for (let i = 0; i < +input[1]; i++) {
    const string = input[2 + i].split(' ');
    calculatedPrice += string[0] * string[1];
}

if (total === calculatedPrice) {
    console.log('Yes');
} else {
    console.log('No');
}
