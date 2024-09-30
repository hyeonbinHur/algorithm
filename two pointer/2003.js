const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const [n, m] = input.shift();
    const arr = [...input[0]];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let result = 0;
        let end = i;
        while (end < arr.length) {
            result += arr[end++];
            if (result >= m) break;
        }
        if (result === m) count++;
    }
    console.log(count);
};
ans();
