const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));
const result = [];
const ans = () => {
    for (let i = 1; i < input.length; i++) {
        if (i % 2 === 0) {
            let max = 0;
            let ans = 0;
            for (let j = input[i].length - 1; j >= 0; j--) {
                let current = input[i][j];
                if (current > max) {
                    max = current;
                } else {
                    ans += max - current;
                }
            }
            result.push(ans);
        }
    }
    console.log(result.join('\n'));
};
ans();
