const { fork } = require('child_process');

const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => Number(e))
    .sort((a, b) => a - b);

const ans = (input) => {
    const sum = input.reduce((prev, next) => prev + next, 0);
    let first = 0;
    let second = 0;
    let stop = false;
    const ans = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            if (sum - input[i] - input[j] === 100) {
                first = i;
                second = j;
                stop = true;
                break;
            }
        }
        if (stop) break;
    }

    for (let i = 0; i < input.length; i++) {
        if (i !== first && i !== second) {
            ans.push(input[i]);
        }
    }
    console.log(ans.join('\n'));
};

ans(input);
