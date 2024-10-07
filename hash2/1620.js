const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));
const ans = () => {
    const [n, m] = input
        .shift()
        .split(' ')
        .map((e) => Number(e));
    const arr = input.splice(0, n);
    const map = new Map(arr.map((e, i) => [e, i + 1]));
    const result = [];

    for (let i = 0; i < input.length; i++) {
        const val = input[i];
        if (!isNaN(+val)) {
            //숫자
            result.push(arr[+val - 1]);
        } else {
            //글자
            result.push(map.get(val));
        }
    }
    console.log(result.join('\n'));
};
ans();
