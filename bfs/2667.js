const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)
    .map((e) => e.split(''))
    .map((e) => e.map((e2) => Number(e2)));
const result = [];

const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
const bfs = (row, col) => {
    const queue = [[row, col]];
    let count = 1;
    input[row][col] = 0;
    while (queue.length) {
        const coordinate = queue.shift();
        dir.map((e) => {
            const xPos = coordinate[1] + e[1];
            const yPos = coordinate[0] + e[0];
            if (
                xPos >= 0 &&
                yPos >= 0 &&
                xPos < input.length &&
                yPos < input.length &&
                input[yPos][xPos] === 1
            ) {
                queue.push([yPos, xPos]);
                input[yPos][xPos] = 0;
                count++;
            }
        });
    }

    result.push(count);
};
const ans = () => {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[i][j] === 1) {
                bfs(i, j);
            }
        }
    }
};
ans();
console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));
