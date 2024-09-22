const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '));

const dir = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, -1],
    [0, 0, 1],
];
const result = [];

const bfs = (graph) => {
    const queue = [];
    let found = false;

    const floor = graph.length;
    const col = graph[0][0].length;
    const row = graph[0].length;

    for (let i = 0; i < floor; i++) {
        for (let j = 0; j < row; j++) {
            for (let k = 0; k < col; k++) {
                if (graph[i][j][k] === 'S') {
                    queue.push([j, k, i]);
                    graph[i][j][k] = 1;
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        if (found) break;
    }
    found = false;
    let targetZ, targetY, targetX;

    for (let i = 0; i < floor; i++) {
        for (let j = 0; j < row; j++) {
            for (let k = 0; k < col; k++) {
                if (graph[i][j][k] === 'E') {
                    targetX = k;
                    targetY = j;
                    targetZ = i;
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        if (found) break;
    }

    while (queue.length) {
        const coordinate = queue.shift();

        dir.map((e) => {
            const curX = coordinate[1];
            const curY = coordinate[0];
            const curZ = coordinate[2];
            const xPos = curX + e[1];
            const yPos = curY + e[0];
            const zPos = curZ + e[2];

            if (
                xPos >= 0 &&
                yPos >= 0 &&
                zPos >= 0 &&
                xPos < col &&
                yPos < row &&
                zPos < floor
            ) {
                if (graph[zPos][yPos][xPos] === '.') {
                    queue.push([yPos, xPos, zPos]);
                    graph[zPos][yPos][xPos] = graph[curZ][curY][curX] + 1;
                } else if (graph[zPos][yPos][xPos] === 'E') {
                    queue.push([yPos, xPos, zPos]);
                    graph[zPos][yPos][xPos] = graph[curZ][curY][curX] + 1;
                }
            }
        });
    }
    if (graph[targetZ][targetY][targetX] === 'E') {
        result.push('Trapped!');
    } else {
        result.push(
            `Escaped in ${graph[targetZ][targetY][targetX] - 1} minute(s).`
        );
    }
};

const createGrapg = (start, num, row) => {
    const TDGraph = [];
    for (let i = 0; i < num; i++) {
        const graph = [];
        for (let j = start; j < start + row; j++) {
            graph.push(input[j][0].split(''));
        }
        start += 1 + row;
        TDGraph.push(graph);
    }
    bfs(TDGraph);
};

const ans = () => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].length === 3) {
            const [L, R, C] = input[i];
            if (L === '0' && R === '0' && C === '0') {
                break;
            }
            createGrapg(i + 1, +L, +R);
            i += i + +R * +L + +L;
        }
    }
};
ans();
console.log(result.join('\n'));
