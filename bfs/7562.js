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
    [-2, -1],
    [-2, 1],

    [-1, -2],
    [-1, 2],

    [1, -2],
    [1, 2],

    [2, -1],
    [2, 1],
];
const result = [];

const bfs = (num, start, end) => {
    const graph = Array.from({ length: num[0] }, () => Array(num[0]).fill(0));
    const [startX, startY] = start;
    const [endX, endY] = end;
    let count = 1;
    graph[startY][startX] = count;
    const queue = [[startY, startX]];

    while (queue.length) {
        const coordinate = queue.shift();
        count++;
        dir.map((e) => {
            const xPos = coordinate[1] + e[1];
            const yPos = coordinate[0] + e[0];
            if (
                xPos >= 0 &&
                yPos >= 0 &&
                xPos < num &&
                yPos < num &&
                graph[yPos][xPos] === 0
            ) {
                queue.push([yPos, xPos]);
                graph[yPos][xPos] = count;
            }
            if (yPos === endY && xPos === endX) {
                console.log(count);
                while (queue.length) {
                    queue.shift();
                }
            }
        });
    }
};

const ans = () => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].length === 1) {
            bfs(input[i], input[i + 1], input[i + 2]);
        }
    }
};

ans();
// console.log(result);
