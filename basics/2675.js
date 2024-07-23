const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
for (let i = 1; i < input.length; i++) {
    const count = input[i].split();
    console.log(count);
}
