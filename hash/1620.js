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
    const questions = [...input];

    const map = new Map(arr.map((e, i) => [e, i]));
    const result = [];
    for (let i = 0; i < questions.length; i++) {
        const val = questions[i];
        if (isNaN(+val)) {
            result.push(map.get(val) + 1);
        } else {
            result.push(arr[val - 1]);
        }
    }
    console.log(result.join('\n'));
};
ans();
