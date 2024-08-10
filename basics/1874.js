const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1);

const ans = (input) => {
    let max = 0;
    let stack = [];
    let result = [];
    let No = false;

    for (let i = 0; i < input.length; i++) {
        while (1) {
            if (max < +input[i]) {
                max++;
                stack.push(max);
                result.push('+');
            } else if (max >= +input[i]) {
                const pop = stack.pop();
                if (pop !== +input[i]) {
                    No = true;
                    break;
                } else {
                    result.push('-');
                    break;
                }
            }
        }

        if (No === true) {
            break;
        }
    }
    if (No) {
        console.log('NO');
    } else {
        console.log(result.join('\n'));
    }
};

ans(input);
