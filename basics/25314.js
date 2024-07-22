const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

const number = +input[0] / 4;

for (let i = 0; i < number; i++) {
    process.stdout.write('long ');
}
process.stdout.write('int ');
