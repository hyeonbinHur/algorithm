const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let answer = '';
for (let i = 0; i < +input[0]; i++) {
    const string = input[1 + i].split(' ');
    answer += +string[0] + +string[1] + '\n';
}
console.log(answer);
