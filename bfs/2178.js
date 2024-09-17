const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const [n, m] = input
    .shift()
    .split(' ')
    .map((e) => Number(e));

const graph = [...input]
    .map((e) => e.split(''))
    .map((e) => e.map((e2) => Number(e2)));

const dir = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
];

const bfs = () => {
    const queue = [[0, 0, 1]]; // 좌표, 움직인 칸 수
    while (queue.length) {
        const [currentRow, currentCol, move] = queue.shift();
        if (currentRow === n - 1 && currentCol === m - 1) return move; // 만약 도착했다면 얼마나 움직였는지를 리턴
        dir.map((e) => {
            const xPos = e[1] + currentCol;
            const yPos = e[0] + currentRow;
            if (
                xPos >= 0 &&
                yPos >= 0 &&
                xPos < m &&
                yPos < n &&
                graph[yPos][xPos] === 1
            ) {
                graph[yPos][xPos] = 0;
                queue.push([yPos, xPos, move + 1]);
            }
        });
    }
};
console.log(bfs());
