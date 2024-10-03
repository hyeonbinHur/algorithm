const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => Number(e));

const ans = () => {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 0) {
            stack.pop();
        } else {
            stack.push(input[i]);
        }
    }
    console.log(stack.reduce((a, b) => a + b, 0));
};
ans();
