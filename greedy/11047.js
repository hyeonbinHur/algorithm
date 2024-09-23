const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '));

const [n, k] = input[0];

const ans = () => {
    let value = +k;
    let num = 0;
    for (let i = input.length - 1; i > 0; i--) {
        const current = +input[i];
        if (value / current >= 1) {
            num += parseInt(value / current);
            value -= current * parseInt(value / current);
        }
    }
    console.log(num);
};
ans();
