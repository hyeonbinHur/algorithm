const input = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '));
const result = [];
const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
const bfs = (graph, coors, startRow, startCol) => {
    const queue = [...coors];
    graph[startRow][startCol] = 1;
    let flag = false;
    if (
        startRow === 0 ||
        startCol === 0 ||
        startCol === graph[0].length - 1 ||
        startRow === graph.length - 1
    ) {
        if (typeof graph[startRow][startCol] === 'number') {
            result.push(graph[startRow][startCol]);

            return;
        }
    }
    while (queue.length) {
        const coor = queue.shift();
        for (let i = 0; i < dir.length; i++) {
            const xPos = coor[1] + dir[i][1];
            const yPos = coor[0] + dir[i][0];
            if (
                xPos >= 0 &&
                yPos >= 0 &&
                xPos < graph[0].length &&
                yPos < graph.length
            ) {
                let last = graph[coor[0]][coor[1]];
                if (
                    graph[coor[0]][coor[1]] === '*' &&
                    graph[yPos][xPos] === '.'
                ) {
                    queue.push([yPos, xPos]);
                    graph[yPos][xPos] = '*';
                } else if (
                    typeof last === 'number' &&
                    graph[yPos][xPos] === '.'
                ) {
                    queue.push([yPos, xPos]);
                    graph[yPos][xPos] = last + 1;
                }
                if (
                    yPos === 0 ||
                    xPos === 0 ||
                    xPos === graph[0].length - 1 ||
                    yPos === graph.length - 1
                ) {
                    if (typeof graph[yPos][xPos] === 'number') {
                        result.push(graph[yPos][xPos]);
                        flag = true;
                        break;
                    }
                }
            }
        }
        if (flag) {
            break;
        }
    }
    if (!flag) {
        result.push('IMPOSSIBLE');
    }
};
const genGraph = (start, row) => {
    const graph = [];
    const sCoors = [];
    const fCoors = [];
    let startRow, startCol;
    for (let i = start + 1; i <= start + row; i++) {
        const newLine = input[i][0].split('');
        graph.push(newLine);
        const index = newLine.indexOf('*');
        const index_2 = newLine.indexOf('@');
        if (index !== -1) {
            fCoors.push([i - 1 - start, index]);
        }
        if (index_2 !== -1) {
            startRow = i - 1 - start;
            startCol = index_2;
            sCoors.push([i - 1 - start, index_2]);
        }
    }
    const coors = [...fCoors, ...sCoors];
    bfs(graph, coors, startRow, startCol);
};
const ans = () => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].length === 2) {
            let [col, row] = input[i];
            col = Number(col);
            row = Number(row);
            genGraph(i, row);
        }
    }
};
ans();
console.log(result.join('\n'));
