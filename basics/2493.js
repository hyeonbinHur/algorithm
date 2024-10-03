const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)[0]
    .split(' ')
    .map((e) => Number(e));

const ans = () => {
    const arr = [...input];

    const stack = [];
    const idx = [];
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        while (1) {
            if (stack.length === 0) break;
            if (stack[stack.length - 1] > arr[i]) break;
            else {
                stack.pop();
                idx.pop();
            }
        }
        if (stack.length) {
            ans.push(idx[idx.length - 1] + 1);
        } else {
            ans.push(0);
        }
        stack.push(input[i]);
        idx.push(i);
    }
    console.log(ans.join(' '));
};
ans();
