const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
let max = 0;
const bfs1 = (arr, q) => {
    const grid = JSON.parse(JSON.stringify(arr));
    const [rStart, cStart] = q[0];

    const newVisit = Array.from({ length: grid.length }, () =>
        Array(grid[0].length).fill(false)
    );

    for (let i = 0; i < q.length; i++) {
        const [y, x] = q[i];
        newVisit[y][x] = true;
        grid[y][x] = 3;
    }
    while (q.length) {
        const [curY, curX] = q.shift();

        dir.map((e) => {
            const nx = curX + e[1];
            const ny = curY + e[0];
            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < arr[0].length &&
                ny < arr.length &&
                newVisit[ny][nx] === false &&
                grid[ny][nx] !== 0
            ) {
                grid[ny][nx] = grid[curY][curX] + 1;
                newVisit[ny][nx] = true;
                q.push([ny, nx]);
            }
        });
    }
    return grid;
};
const bfs2 = (arr, q) => {
    const grid = JSON.parse(JSON.stringify(arr));

    const newVisit = Array.from({ length: grid.length }, () =>
        Array(grid[0].length).fill(false)
    );

    for (let i = 0; i < q.length; i++) {
        const [y, x] = q[i];
        newVisit[y][x] = true;
        grid[y][x] = 3;
    }
    let count = 0;
    while (q.length) {
        const [curY, curX] = q.shift();

        dir.map((e) => {
            const nx = curX + e[1];
            const ny = curY + e[0];
            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < arr[0].length &&
                ny < arr.length &&
                newVisit[ny][nx] === false &&
                grid[ny][nx] !== 0
            ) {
                if (grid[ny][nx] === grid[curY][curX] + 1) {
                    grid[ny][nx] = 'X';
                    count++;
                } else {
                    grid[ny][nx] = grid[curY][curX] + 1;
                    q.push([ny, nx]);
                }

                newVisit[ny][nx] = true;
            }
        });
    }
    if (count > max) {
        max = count;
        console.log('-------------');
        console.log(max);

        console.log(arr);
        console.log(grid);
    }
};

const ans = () => {
    const [n, m, g, r] = input.shift();
    const twoArr = [];
    let pArr = [];
    let curArr = [];
    let target = g + r;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (input[i][j] === 2) {
                twoArr.push([i, j]);
            }
        }
    }
    let visit = Array(twoArr.length).fill(false);
    const backTrackin = (k) => {
        if (k === target) {
            pArr.push([...curArr]);
        } else {
            for (let i = 0; i < twoArr.length; i++) {
                if (visit[i] === false) {
                    curArr[k] = twoArr[i];
                    visit[i] = true;
                    backTrackin(k + 1);
                    visit[i] = false;
                }
            }
        }
    };
    backTrackin(0);
    for (let i = 0; i < pArr.length; i++) {
        let gArr = [];
        let rArr = [];
        let gCount = g;
        for (let j = 0; j < pArr[i].length; j++) {
            if (gCount !== 0) {
                gArr.push(pArr[i][j]);
                gCount--;
            } else {
                rArr.push(pArr[i][j]);
            }
        }
        const gGrid = bfs1(input, gArr);
        bfs2(gGrid, rArr);
    }
    console.log(max);
};
ans();
