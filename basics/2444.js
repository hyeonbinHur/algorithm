const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const number = +input[0];
let count = 1;

for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number - i; j++) {
        process.stdout.write(' ');
    }
    for (let j = 1; j <= count; j++) {
        process.stdout.write('*');
    }
    console.log('');
    count += 2;
}
count -= 2;

for (i = number; i > 0; i--) {
    count -= 2;

    for (let j = 0; j <= number - i; j++) {
        process.stdout.write(' ');
    }
    for (let j = 1; j <= count; j++) {
        process.stdout.write('*');
    }
    console.log('');
}
