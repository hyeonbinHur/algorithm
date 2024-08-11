const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ');

function solution(input) {
    const ans = [];
    const [n, k] = input;
    const que = Array.from({ length: n }, (v, i) => i + 1);
    let count = 1;
    while (1) {
        if (que.length === 0) {
            break;
        }

        if (count % k === 0) {
            ans.push(que.shift());
        } else {
            que.push(que.shift());
        }
        count++;
    }

    console.log('<' + ans.join(', ') + '>');
}
solution(input);
