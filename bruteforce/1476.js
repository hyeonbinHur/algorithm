const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ')
    .map((e) => Number(e));
const ans = (input) => {
    let count = 1;
    while (1) {
        if (
            (count - input[0]) % 15 === 0 &&
            (count - input[1]) % 28 === 0 &&
            (count - input[2]) % 19 === 0
        ) {
            break;
        }
        count++;
    }
    console.log(count);
};
ans(input);
