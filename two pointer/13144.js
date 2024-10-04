const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1);

const ans = () => {
    const arr = input[0].split(' ').map((e) => Number(e));
    const visit = Array(100001).fill(0);

    let start = 0;
    let end = 1;
    let ans = 0;
    visit[arr[start]]++;

    while (1) {
        if (arr[end] === arr[start]) {
            ans += end - start;
            visit[arr[start]]--;
            visit[arr[end]]++;
            start++;
            end++;
        } else if (arr[end] !== arr[start]) {
            if (visit[arr[end]] === 0) {
                visit[arr[end]]++;
                end++;
            } else {
                visit[arr[start]]--;
                ans += end - start;
                start++;
            }
        }
        if (end > arr.length) break;
    }
    console.log(ans);
};
ans();
