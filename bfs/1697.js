const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => Number(e));

const sub = input[0];
const bin = input[1];
const arr = Array.from({ length: 100001 }, () => 0);

const bfs = () => {
    const queue = [[sub, 1]];
    arr[sub] = 1;

    while (queue.length) {
        const first = queue.shift();
        const num = first[0];
        const sec = first[1];
        let newNum = 0;
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                newNum = num + 1;
            } else if (i === 1) {
                newNum = num - 1;
            } else {
                newNum = num * 2;
            }

            if (newNum >= 0 && newNum <= 100000 && arr[newNum] === 0) {
                queue.push([newNum, sec + 1]);
                arr[newNum] = sec + 1;
            }

            if (newNum === bin) return;
        }
    }
};

bfs();
console.log(arr[bin] - 1);
