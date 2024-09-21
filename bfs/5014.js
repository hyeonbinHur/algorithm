const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => Number(e));

const [F, S, G, U, D] = input;
const arr = Array(F + 1).fill(0);
const dir = [U, -D];

const bfs = () => {
    const queue = [S];
    arr[S] = 1;
    while (queue.length) {
        const coordinate = queue.shift();
        dir.map((e) => {
            const next = coordinate + e;

            if (next > 0 && next <= F && arr[next] === 0) {
                queue.push(next);
                arr[next] = arr[coordinate] + 1;
            }
        });
    }
};
bfs();

console.log(arr[G] !== 0 ? arr[G] - 1 : 'use the stairs');
