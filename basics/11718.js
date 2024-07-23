const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 1; i < input.length; i++) {
    const num = input[i].split(' ')[0];
    const string = input[i].trim();
    for (let k = 2; k < string.length; k++) {
        for (let j = 0; j < num; j++) {
            process.stdout.write(string[k]);
        }
    }
    if (i !== input.length - 1) console.log('');
}
