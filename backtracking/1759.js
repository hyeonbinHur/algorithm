const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '));
const ans = () => {
    const [n, m] = input.shift().map((e) => Number(e)); // n개
    const arr = input.shift().sort();
    const visit = Array(arr.length).fill(false);
    const ans = [];
    const result = [];

    const backTrackin = (k, start) => {
        if (k === n) {
            let count1 = 0;
            let count2 = 0;
            for (let i = 0; i < ans.length; i++) {
                const c = ans[i];
                if (
                    c === 'a' ||
                    c === 'e' ||
                    c === 'i' ||
                    c === 'o' ||
                    c === 'u'
                )
                    count1++;
                else count2++;
            }
            if (count1 >= 1 && count2 >= 2) {
                result.push(ans.join(''));
            }
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

    backTrackin(0, 0);
    console.log(result.join('\n'));
};
ans();
