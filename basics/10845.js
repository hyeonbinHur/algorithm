const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', '').split(' '));

const ans = (input) => {
    let queue = [];
    let ans = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i][0] === 'push') {
            queue.push(input[i][1]);
        } else if (input[i][0] === 'pop') {
            if (queue.length) {
                ans.push(queue.splice(0, 1));
            } else {
                ans.push(-1);
            }
        } else if (input[i][0] === 'size') {
            ans.push(queue.length);
        } else if (input[i][0] === 'empty') {
            if (queue.length) {
                ans.push(0);
            } else {
                ans.push(1);
            }
        } else if (input[i][0] === 'front') {
            if (queue.length) {
                ans.push(queue[0]);
            } else {
                ans.push(-1);
            }
        } else if (input[i][0] === 'back') {
            if (queue.length) {
                ans.push(queue[queue.length - 1]);
            } else {
                ans.push(-1);
            }
        }
    }

    console.log(ans.join('\n'));
};

ans(input);
