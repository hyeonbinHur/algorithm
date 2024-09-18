const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1);

const graph = [...input]
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

const bfs = () => {
    const queue = [];
    for (let i = 0; i < graph[0].length; i++) {
        for (let j = 0; j < graph.length; j++) {
            if (graph[j][i] === 1) {
                queue.push([j, i, 1]);
            }
        }
    }
    let head = 0;
    while (queue.length > head) {
        const coordinate = queue[head++];

        dir.map((e) => {
            const xPos = e[1] + coordinate[1];
            const yPos = e[0] + coordinate[0];
            const currentDate = coordinate[2];
            if (
                xPos >= 0 &&
                yPos >= 0 &&
                xPos < graph[0].length &&
                yPos < graph.length &&
                graph[yPos][xPos] === 0 &&
                graph[yPos][xPos] !== -1
            ) {
                queue.push([yPos, xPos, currentDate + 1]);
                if (graph[yPos][xPos] === 0) {
                    graph[yPos][xPos] = currentDate + 1;
                } else if (
                    graph[yPos][xPos] !== -1 &&
                    graph[yPos][xPos] !== 0
                ) {
                    graph[yPos][xPos] =
                        currentDate + 1 < graph[yPos][xPos]
                            ? currentDate + 1
                            : graph[yPos][xPos];
                }
            }
        });
    }
};

bfs();

const exists = graph.some((row) => row.includes(0));

if (exists) {
    console.log(-1);
} else {
    console.log(
        graph.reduce((maxValue, rowIndex) => {
            return Math.max(maxValue, ...rowIndex);
        }, -Infinity) - 1
    );
}
