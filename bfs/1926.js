const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const [n, m] = input.shift();
const graph = [...input];
const checked = Array.from({ length: n }, () => Array(m).fill(false));
const dir = [
    [0, 1], // 오른쪽
    [0, -1], // 왼쪽
    [1, 0], //위
    [-1, 0], // 아래
];
let count = 0;
let result = [0];

const bfs = (y, x) => {
    let size = 1;
    const queue = [[y, x]];
    while (queue.length > 0) {
        const coordinate = queue.shift();
        dir.map((e) => {
            const xPos = e[1] + coordinate[1];
            const yPos = e[0] + coordinate[0];
            if (xPos < m && xPos >= 0 && yPos < n && yPos >= 0) {
                //범위 안에 들어왔다면
                if (graph[yPos][xPos] === 1) {
                    if (!checked[yPos][xPos]) {
                        // 방문한적이 없다면
                        checked[yPos][xPos] = true;
                        size++;
                        queue.push([yPos, xPos]);
                    }
                }
            }
        });
    }
    result.push(size);
};

const ans = () => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!checked[i][j] && graph[i][j] === 1) {
                checked[i][j] = true;
                bfs(i, j);
                count++;
            }
        }
    }
};
ans();
console.log(count);
console.log(Math.max(...result));
