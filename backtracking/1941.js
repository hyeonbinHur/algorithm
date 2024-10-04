const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(''));

const ans = [];
const visit = Array(25).fill(false);
let result = 0;

const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

const bfs = (arr) => {
    const visit = Array.from({ length: 5 }, () => Array(5).fill(0));
    for (let i = 0; i < arr.length; i++) {
        const [curY, curX] = arr[i];
        visit[curY][curX] = 1;
    }

    const q = [];
    q.push(arr[0]);

    while (q.length) {
        const [curY, curX] = q.shift();

        dir.map((e) => {
            const nx = curX + e[1];
            const ny = curY + e[0];
            if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5) {
                if (visit[ny][nx] === 1) {
                    visit[ny][nx] = 0;
                    q.push([ny, nx]);
                }
            }
        });
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (visit[i][j] === 1) return false;
        }
    }
    return true;
};

const backTrackin = (k, start) => {
    if (k === 7) {
        // s가 4개 이상인지 체크
        let sCount = 0;
        for (let i = 0; i < 7; i++) {
            const [y, x] = ans[i];
            if (input[y][x] === 'S') sCount++;
        }
        if (sCount >= 4) {
            if (bfs(ans)) {
                result++;
            }
        }
    } else {
        for (let i = start; i < 25; i++) {
            if (visit[i] === false) {
                ans[k] = [Math.floor(i / 5), i % 5];
                visit[i] = true;
                backTrackin(k + 1, i + 1);
                visit[i] = false;
            }
        }
    }
};
backTrackin(0, 0);
console.log(result);
