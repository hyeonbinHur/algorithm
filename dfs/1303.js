const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(''));
const arr = input;
const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
const dfs = (row, col, char) => {
    const stack = [[row, col]];
    arr[row][col] = 0;
    let count = 1;
    while (stack.length) {
        const coor = stack.pop();
        dir.map((e) => {
            const xPos = e[1] + coor[1];
            const yPos = e[0] + coor[0];
            if (
                xPos >= 0 &&
                yPos >= 0 &&
                xPos < arr[0].length &&
                yPos < arr.length &&
                arr[yPos][xPos] === char
            ) {
                stack.push([yPos, xPos]);
                count++;
                arr[yPos][xPos] = 0;
            }
        });
    }
    return count;
};
const ans = () => {
    let bCount = 0;
    let wCount = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 'B') {
                let val = dfs(i, j, 'B');
                bCount += val ** 2;
            } else if (arr[i][j] === 'W') {
                let val = dfs(i, j, 'W');

                wCount += val ** 2;
            }
        }
    }
    console.log(wCount, bCount);
};
ans();
