const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '));

const [n, s] = input[0];
const chars = input[1].sort();
const used = Array(+s).fill(false);
const arr = Array(+n).fill(0);
const result = [];
const cons = ['a', 'e', 'i', 'o', 'u'];

const backTrackin = (k, last) => {
    if (k === +n) {
        let current = '';
        let consonent = 0;
        let vowl = 0;
        for (let i = 0; i < k; i++) {
            current += arr[i];
            const index = cons.indexOf(arr[i]);
            if (index !== -1) {
                consonent++;
            } else {
                vowl++;
            }
        }
        if (consonent >= 1 && vowl >= 2) {
            result.push(current);
        }
    }

    for (let i = last; i < +s; i++) {
        if (!used[i]) {
            arr[k] = chars[i];
            used[i] = true;
            backTrackin(k + 1, i);
            used[i] = false;
        }
    }
};
backTrackin(0, 0);
console.log(result.join('\n'));
