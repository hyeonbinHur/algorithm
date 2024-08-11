const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', '').split(' '));

const ans = (input) => {
    let ans = [];
    let deque = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i][0] === 'push_back') {
            deque.push(input[i][1]);
        } else if (input[i][0] === 'push_front') {
            deque.unshift(input[i][1]);
        } else if (input[i][0] === 'pop_front') {
            deque.length ? ans.push(deque.shift()) : ans.push(-1);
        } else if (input[i][0] === 'pop_back') {
            deque.length ? ans.push(deque.pop()) : ans.push(-1);
        } else if (input[i][0] === 'size') {
            ans.push(deque.length);
        } else if (input[i][0] === 'empty') {
            deque.length ? ans.push(0) : ans.push(1);
        } else if (input[i][0] === 'front') {
            deque.length ? ans.push(deque[0]) : ans.push(-1);
        } else if (input[i][0] === 'back') {
            deque.length ? ans.push(deque[deque.length - 1]) : ans.push(-1);
        }
    }
    console.log(ans.join('\n'));
};

ans(input);
