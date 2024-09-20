const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(''));

const visited = Array.from({ length: input.length }, () =>
    Array(input.length).fill(false)
);

const visited_2 = Array.from({ length: input.length }, () =>
    Array(input.length).fill(false)
);

const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

const bfs = (row, col, color, type) => {
    if (type === 'c') {
        const queue = [[row, col]];
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
                    visited[yPos][xPos] === false
                ) {
                    if (color === 'R' || color === 'G') {
                        if (
                            input[yPos][xPos] === 'R' ||
                            input[yPos][xPos] === 'G'
                        ) {
                            visited[yPos][xPos] = true;
                            queue.push([yPos, xPos]);
                        }
                    } else if (color === 'B') {
                        if (input[yPos][xPos] === 'B') {
                            visited[yPos][xPos] = true;
                            queue.push([yPos, xPos]);
                        }
                    }
                }
            });
        }
    } else if (type === 'n') {
        const queue = [[row, col]];
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
                    visited_2[yPos][xPos] === false
                ) {
                    if (color === input[yPos][xPos]) {
                        visited_2[yPos][xPos] = true;
                        queue.push([yPos, xPos]);
                    }
                }
            });
        }
    }
};

const ans = () => {
    let count = 0;
    let count_2 = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (visited[i][j] === false) {
                bfs(i, j, input[i][j], 'c');
                count++;
            }
            if (visited_2[i][j] === false) {
                bfs(i, j, input[i][j], 'n');
                count_2++;
            }
        }
    }

    console.log(count_2, count);
};

ans();
