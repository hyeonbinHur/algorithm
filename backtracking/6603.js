const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)))
    .map((e) => e.slice(1));

const ans = () => {
    let arr = [];
    let ans = [];
    let result = [];
    let visit = [];

    const backTrackin = (k, start) => {
        if (k === 6) {
            result.push(ans.join(' '));
        } else {
            for (let i = start; i < arr.length; i++) {
                if (visit[i] === false) {
                    ans[k] = arr[i];
                    visit[i] = true;
                    backTrackin(k + 1, i + 1);
                    visit[i] = false;
                }
            }
        }
    };

    for (let i = 0; i < input.length - 1; i++) {
        arr = input[i];
        visit = Array(arr.length).fill(false);
        backTrackin(0, 0);
        console.log(result.join('\n'));
        console.log();
        result = [];
    }
};
ans();
