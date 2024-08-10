const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1);

const ans = (input) => {
    let ans = [];

    for (let i = 0; i < input.length; i++) {
        let arr = input[i].replace('\r', '').split('');
        let stack = [];

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === '(') {
                stack.push('a');
            } else if (arr[j] === ')') {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    stack.push('a');
                    break;
                }
            }
        }
        if (stack.length === 0) {
            ans.push('YES');
        } else {
            ans.push('NO');
        }
    }
    console.log(ans.join('\n'));
};
ans(input);
