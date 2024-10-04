const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('');

const ans = () => {
    const arr = [...input];
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (char === '(' || char === '[') {
            stack.push(char);
        } else {
            if (char === ')') {
                let cur = 0;
                if (stack.length === 0) {
                    console.log(0);
                    return;
                }
                while (1) {
                    if (stack.length === 0) {
                        console.log(0);
                        return;
                    }
                    if (
                        stack[stack.length - 1] === '(' ||
                        typeof stack[stack.length - 1] === 'number'
                    ) {
                        const pop = stack.pop();
                        if (pop === '(') {
                            break;
                        } else if (typeof pop === 'number') {
                            cur += pop;
                        }
                    } else {
                        console.log(0);
                        return;
                    }
                }
                stack.push((cur === 0 ? 1 : cur) * 2);
            } else if (char === ']') {
                let cur = 0;
                if (stack.length === 0) {
                    console.log(0);
                    return;
                }
                while (1) {
                    if (stack.length === 0) {
                        console.log(0);
                        return;
                    }
                    if (
                        stack[stack.length - 1] === '[' ||
                        typeof stack[stack.length - 1] === 'number'
                    ) {
                        const pop = stack.pop();
                        if (pop === '[') {
                            break;
                        } else if (typeof pop === 'number') {
                            cur += pop;
                        }
                    } else {
                        console.log(0);
                        return;
                    }
                }
                stack.push((cur === 0 ? 1 : cur) * 3);
            }
        }
    }
    let result = 0;
    for (let i = 0; i < stack.length; i++) {
        if (typeof stack[i] === 'number') {
            result += stack[i];
        } else {
            console.log(0);
            return;
        }
    }
    console.log(result);
};

ans();
