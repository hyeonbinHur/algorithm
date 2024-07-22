const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
for (let i = 0; i < +input[0]; i++) {
    let string = input[i + 1].split(' ');
    console.log(+string[0] + +string[1]);
}
