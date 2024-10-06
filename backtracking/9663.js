const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0];

const n = +input;
const visit1 = Array(n - 1).fill(false);
const visit2 = Array(n * 2).fill(false);
const visit3 = Array(n * 2).fill(false);

let ans = 0;

const backtrackin = (k) => {
    if (k === n) {
        ans += 1;
        return;
    } else {
        for (let i = 0; i < n; i++) {
            if (!visit1[i] && !visit2[i - k] && !visit3[k + i]) {
                visit1[i] = true;
                visit2[i - k] = true;
                visit3[k + i] = true;
                backtrackin(k + 1);
                visit1[i] = false;
                visit2[i - k] = false;
                visit3[k + i] = false;
            }
        }
    }
};
backtrackin(0);

console.log(ans);
