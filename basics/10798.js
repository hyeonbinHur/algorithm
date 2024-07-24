let input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 5; j++) {
        if (input[j][i] !== undefined) {
            process.stdout.write(input[j][i]);
        }
    }
}
