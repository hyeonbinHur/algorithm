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

const checked = Array.from({ length: n }, () => Array(m).fill(false));

const result = [];

const dir = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
];

const bfs = (y, x, size, checked) => {
    const queue = [[y, x]];
    const newChecked = [...checked];
    newChecked[y][x] = true;
    let newSize = size;
    console.log(y, x, size);
    if (y === n - 1 && x === m - 1) {
        console.log('arrive');
        console.log(y, x);
        result.push(size);
        return;
    }
    while (queue.length > 0) {
        const coordinate = queue.shift();
        dir.map((e) => {
            const xPos = coordinate[1] + e[1];
            const yPos = coordinate[0] + e[0];
            if (xPos >= 0 && xPos < m && yPos >= 0 && yPos < n) {
                if (graph[yPos][xPos] === 1) {
                    if (!newChecked[yPos][xPos]) {
                        newChecked[yPos][xPos] = true;
                        queue.push([yPos, xPos]);
                        newSize++;
                        bfs(yPos, xPos, newSize, newChecked);
                    }
                }
            }
        });
    }
};
bfs(0, 0, 1, checked);
console.log(result);
