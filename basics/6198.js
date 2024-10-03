const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => Number(e));

function ans() {
    const arr = [...input];
    const stack = [];
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        while (1) {
            if (stack.length === 0) break;
            if (stack[stack.length - 1] > arr[i]) break;
            stack.pop();
        }
        ans += stack.length;
        stack.push(arr[i]);
    }
    console.log(ans);
}

ans();
