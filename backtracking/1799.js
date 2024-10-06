const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    let coor = Array.from({ length: input.length * 2 }, () => []);
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[i][j] === 1) {
                coor[i + j].push([i, j]);
            }
        }
    }
    const visit2 = Array(input.length * 2).fill(false);
    const visit3 = Array(input.length * 2).fill(false);
    const backTrackin = (k, cnt) => {
        if (max >= cnt + coor.length - k) {
            return;
        } else {
            if (k >= coor.length - 1) {
                max = Math.max(cnt, max);
            } else {
                for (let i = 0; i < coor[k].length; i++) {
                    const [curY, curX] = coor[k][i];
                    if (visit2[curX + curY] === false && !visit3[curY - curX]) {
                        visit2[curX + curY] = true;
                        visit3[curY - curX] = true;
                        backTrackin(k + 2, cnt + 1);
                        visit2[curX + curY] = false;
                        visit3[curY - curX] = false;
                    }
                }
                backTrackin(k + 2, cnt);
            }
        }
    };
    let max = 0;
    backTrackin(0, 0);
    const ans1 = max;
    max = 0;
    backTrackin(1, 0);
    const ans2 = ans1 + max;
    console.log(ans2);
};

ans();
