const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const string = input[0].split('');
const reverse = string.reverse();

if (input[0] === reverse.join('')) {
    console.log(1);
} else {
    console.log(0);
}
