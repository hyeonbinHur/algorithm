const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
let count = 0;
let words = input[0].split(' ');
for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') count++;
}
console.log(count);
