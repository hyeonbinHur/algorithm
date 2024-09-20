const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const result = [];
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

const bfs = (graph, row, col, width, height) => {
    const queue = [[row, col]];

    while (queue.length) {
        const coordinate = queue.shift();
        dir.map((e) => {
            const currentX = coordinate[1] + e[1];
            const currentY = coordinate[0] + e[0];

            if (
                currentX >= 0 &&
                currentY >= 0 &&
                currentX < width &&
                currentY < height &&
                graph[currentY][currentX] === 1
            ) {
                graph[currentY][currentX] = 0;
                queue.push([currentY, currentX]);
            }
        });
    }
};
const generateGraph = (start, end, width, height) => {
    //generate a graph
    let count = 0;
    const graph = Array.from({ length: height }, () => Array(width).fill(0));
    for (let i = start; i <= end; i++) {
        const [x, y] = input[i];
        graph[y][x] = 1;
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (graph[i][j] === 1) {
                bfs(graph, i, j, width, height);
                count++;
            }
        }
    }
    result.push(count);
};

const ans = () => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].length === 3) {
            const [n, m, k] = input[i];
            generateGraph(i + 1, i + k, n, m);
        }
    }
};

ans();
console.log(result.join('\n'));
