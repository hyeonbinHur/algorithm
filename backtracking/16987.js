const input = require('fs')
    .readFileSync(0)
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    input.sort((a, b) => a[0] - b[0]);
    let start = input[0][0];
    let end = input[0][1];
    let total = 0;
    for (let i = 1; i < input.length; i++) {
        const [curStart, curEnd] = input[i];
        if (curStart > end) {
            // 아예 안겹침
            total += end - start;
            start = curStart;
            end = curEnd;
        } else if (curEnd > end) {
            end = curEnd;
        }
    }
    total += end - start;
    console.log(total);
};

ans();
