const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''));

// console.log('A'.charCodeAt()); //65
// console.log('Z'.charCodeAt()); //90

const ans = (input) => {
    const equation = input[0].split('');

    let stack = [];
    for (let i = 0; i < equation.length; i++) {
        if (equation[i].charCodeAt() >= 65 && equation[i].charCodeAt() <= 90) {
            let number = +input[equation[i].charCodeAt() - 64];
            stack.push(number);
        } else {
            let b = stack.pop();
            let a = stack.pop();
            let calc = 0;
            if (equation[i] === '+') {
                calc = a + b;
            } else if (equation[i] === '-') {
                calc = a - b;
            } else if (equation[i] === '*') {
                calc = a * b;
            } else if (equation[i] === '/') {
                calc = a / b;
            }
            stack.push(calc);
        }
    }
    console.log(stack[0].toFixed(2));
};

ans(input);
