const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const [m, n, k] = input[0];

const graph = Array.from({ length: m }, () => Array(n).fill(0));
const result = [];
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

const bfs = (row, col) => {
    let count = 1;
    graph[row][col] = 1;
    const queue = [[row, col]];

    while (queue.length) {
        const coordinate = queue.shift();

        dir.map((e) => {
            const xPos = coordinate[1] + e[1];
            const yPos = coordinate[0] + e[0];
            if (
                xPos >= 0 &&
                yPos >= 0 &&
                yPos < m &&
                xPos < n &&
                graph[yPos][xPos] === 0
            ) {
                queue.push([yPos, xPos]);
                graph[yPos][xPos] = 1;
                count++;
            }
        });
    }

    result.push(count);
};

const ans = () => {
    for (let i = 1; i <= k; i++) {
        const [x1, y1, x2, y2] = input[i];
        for (let j = y1; j < y2; j++) {
            for (let q = x1; q < x2; q++) {
                graph[j][q] = 1;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (graph[i][j] === 0) {
                bfs(i, j);
            }
        }
    }
};

ans();
// console.log(graph);
console.log(result.length);
console.log(result.sort((a, b) => a - b).join(' '));
