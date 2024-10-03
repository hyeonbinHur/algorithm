const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)
    .map((e) => e.split(''))
    .map((e) => e.map((e2) => Number(e2)));
const grid = JSON.parse(JSON.stringify(input));
const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
const bfs = (x, y) => {
    const q = [[0, 0]];

    while (q.length) {
        const [curY, curX] = q.shift();
        dir.map((e) => {
            const xPos = curX + e[1];
            const yPos = curY + e[0];

            if (
                yPos >= 0 &&
                xPos >= 0 &&
                xPos < x &&
                yPos < y &&
                grid[yPos][xPos] === 1
            ) {
                grid[yPos][xPos] = grid[curY][curX] + 1;
                q.push([yPos, xPos]);
            }
        });
    }
};

const ans = () => {
    const x = grid[0].length;
    const y = grid.length;
    bfs(x, y);
    console.log(grid[y - 1][x - 1]);
};
ans();
