const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const [n, k] = input.shift();
    const arr = input[0];

    let count = 0;
    let cur = 0;
    const current = [];

    for (let i = 0; i < arr.length; i++) {
        if (cur < n) {
            const index = current.indexOf(arr[i]);
            if (index === -1) {
                current.push(arr[i]);
                cur++;
            }
        } else {
            const index = current.indexOf(arr[i]);
            if (index === -1) {
                let min = 0;
                let idx = 0;
                for (let j = 0; j < current.length; j++) {
                    const check = current[j];
                    let count = 0;
                    for (let k = i + 1; k < arr.length; k++) {
                        if (check === arr[k]) break;
                        else count++;
                    }

                    if (count > min) {
                        min = count;
                        idx = j;
                    }
                }
                current.splice(idx, 1);
                current.push(arr[i]);
                count++;
            }
        }
    }
    console.log(count);
};
ans();
