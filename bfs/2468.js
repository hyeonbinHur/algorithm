const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
const result = [];

const bfs = (graph, rain, row, col) => {
    const queue = [[row, col]];
    graph[row][col] = 0;
    while (queue.length) {
        const coordinate = queue.shift();
        dir.map((e) => {
            const xPos = coordinate[1] + e[1];
            const yPos = coordinate[0] + e[0];
            if (
                xPos >= 0 &&
                yPos >= 0 &&
                xPos < graph.length &&
                yPos < graph.length &&
                graph[yPos][xPos] > rain
            ) {
                queue.push([yPos, xPos]);
                graph[yPos][xPos] = 0;
            }
        });
    }
};

const ans = () => {
    // 최대 높이 구하기
    const max = Math.max(...input.flat());
    const min = Math.min(...input.flat());
    const size = input.length;

    for (let i = 0; i < max; i++) {
        let count = 0;

        const graph = JSON.parse(JSON.stringify(input));

        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                if (graph[j][k] > i) {
                    count++;
                    bfs(graph, i, j, k);
                }
            }
        }
        result.push(count);
    }
};
ans();
console.log(Math.max(...result));
