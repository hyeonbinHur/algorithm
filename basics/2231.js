const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const goal = +input[0];
let ans = 0;

for (let i = 0; i < goal + 1; i++) {
    //본인 더하기 자릿수 합
    let current = i.toString();
    current = Array.from(current).reduce(
        (prev, next) => prev + Number(next),
        0
    );

    if (current + i === goal) {
        ans = i;
        break;
    }
}

console.log(ans);
