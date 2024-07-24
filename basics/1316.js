const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let count = 0;

for (let i = 1; i < input.length; i++) {
    let arr = Array(26).fill(0);
    let sting = input[i].trim();
    for (let j = 0; j < sting.length; j++) {
        const idx = input[i][j].charCodeAt(0) - 97;
        if (input[i][j - 1] !== input[i][j]) {
            if (arr[idx] !== 0) {
                break;
            }
        }
        if (j === sting.length - 1) {
            if (arr[idx] === 0) {
                count++;
            } else if (input[i][j - 1] === input[i][j]) {
                count++;
            }
        }
        arr[idx]++;
    }
}
console.log(count);
