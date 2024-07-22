const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

for (let i = 1; i <= +input[0]; i++) {
    for (let j = +input[0]; j > i; j--) {
        process.stdout.write(' ');
    }
    for (let j = 0; j < i; j++) {
        process.stdout.write('*');
    }
    console.log('');
}
