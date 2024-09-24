const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

input.splice(1, 1);

const ans = () => {
    const [n, m] = input.shift();
    const arr = input.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    // console.log(arr);

    let ans = 0;
    let vils = Array(n).fill(m);
    for (let i = 0; i < arr.length; i++) {
        let [start, end, num] = arr[i];
        if (end - start > 1) {
            let count = end - start;
            let min = Infinity;
            for (let j = 0; j < count; j++) {
                min = Math.min(min, vils[start + j - 1]);
            }
            if (min - num >= 0) {
                for (let j = 0; j < count; j++) {
                    vils[start + j - 1] -= num;
                }
                ans += num;
            } else {
                for (let j = 0; j < count; j++) {
                    vils[start + j - 1] -= min;
                }
                ans += min;
            }
        } else {
            if (vils[start - 1] - num >= 0) {
                vils[start - 1] -= num;
                ans += num;
            } else {
                ans += vils[start - 1];
                vils[start - 1] = 0;
            }
        }
        // console.log(vils);
        // console.log(ans);
    }
    console.log(ans);
};

ans();
