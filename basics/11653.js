const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let number = +input[0];

if (number !== 1) {
    while (1) {
        for (let i = 2; i <= number; i++) {
            if (number % i === 0) {
                number = number / i;
                console.log(i);

                break;
            }
        }
        if (number === 1) break;
    }
}
