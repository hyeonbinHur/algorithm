const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = (input) => {
    const ans = [];
    for (let i = 0; i < input.length; i++) {
        const [M, N, x, y] = input[i];
        let nx = x;
        let isValid = true;
        while (1) {
            if ((nx - x) % M === 0 && (nx - y) % N === 0) break;
            if (nx > M * N) {
                isValid = false;
                break;
            }
            nx += M;
        }
        if (isValid) {
            ans.push(nx);
        } else {
            ans.push(-1);
        }
    }
    console.log(ans.join('\n'));
};

ans(input);
