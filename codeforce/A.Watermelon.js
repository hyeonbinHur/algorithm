const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => Number(e));

if (input[0] === 2) {
    console.log('NO');
} else {
    console.log(input[0] % 2 === 0 ? 'YES' : 'NO');
}
