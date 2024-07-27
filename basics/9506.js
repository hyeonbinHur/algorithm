//제곱근과 약수의 대칭성을 이용한 모든 약수 구하기
const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

for (let i = 0; i < input.length - 1; i++) {
    const factors = [];

    for (let j = 1; j < Math.sqrt(+input[i]); j++) {
        if (+input[i] % j === 0) {
            factors.push(j);
            factors.push(+input[i] / j);
        }
    }

    if (factors.reduce((a, b) => a + b, 0) === +input[i] * 2) {
        factors.sort((a, b) => a - b);
        factors.pop();

        console.log(+input[i] + ' = ' + factors.join(' + '));
    } else {
        console.log(+input[i] + ' is NOT perfect.');
    }
}
