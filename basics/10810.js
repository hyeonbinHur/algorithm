const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const num = +input[0].split(' ')[0];
const loop = +input[0].split(' ')[1];
let arr = Array(num).fill(0);

for (let i = 0; i < loop; i++) {
    const string = input[i + 1].split(' ');
    const ball = +string[2];
    for (let j = +string[0]; j <= +string[1]; j++) {
        arr[j - 1] = ball;
    }
}

for (let i = 0; i < num; i++) {
    process.stdout.write(arr[i] + ' ');
}
