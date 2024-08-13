const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ')
    .map(Number);

const ans = (input) => {
    let prequency_obj = input.reduce((acc, value) => {
        if (acc[value]) {
            acc[value]++;
        } else {
            acc[value] = 1;
        }
        return acc;
    }, {});
    const prequency_arr = [];
    for (let i = 0; i < input.length; i++) {
        prequency_arr[i] = prequency_obj[input[i]];
    }
    let stack = [];
    let ans = Array(input.length);
    let max = prequency_arr[0];
    stack.push(0);
    for (let i = 1; i < input.length; i++) {
        if (prequency_arr[i] > prequency_arr[stack[stack.length - 1]]) {
            while (1) {
                if (prequency_arr[stack[stack.length - 1]] < prequency_arr[i]) {
                    ans[stack.pop()] = i;
                } else {
                    stack.push(i);
                    break;
                }
            }
        } else {
            stack.push(i);
        }
    }
    stack.push(input.length - 1);
    for (let i = 0; i < stack.length; i++) {
        ans[stack[i]] = -1;
    }
    ans.map((e, i) => {
        if (e !== -1) {
            ans[i] = input[e];
        }
    });
    console.log(ans.join(' '));
};
ans(input);
