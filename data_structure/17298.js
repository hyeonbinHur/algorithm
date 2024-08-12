//Suuperrr hardd 2024. 8. 12
const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ')
    .map((e) => Number(e));

const ans = (input) => {
    const ans = Array(input.length);
    const stack = [];
    stack.push(0);
    for (let i = 1; i < input.length; i++) {
        while (1) {
            if (input[i] > input[stack[stack.length - 1]]) {
                ans[stack.pop()] = input[i];
            } else {
                stack.push(i);
                break;
            }
        }
    }
    for (let i = 0; i < stack.length; i++) {
        ans[stack[i]] = -1;
    }
    ans.map(Number);
    console.log(ans.join(' '));
};
ans(input);
