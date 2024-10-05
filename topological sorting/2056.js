const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const n = input.shift();
    const ind = Array(n[0] + 1).fill(0);
    const adj = Array.from({ length: n[0] + 1 }, () => []);
    // 큐에 있으면서 0인건 전부빼, 뺀것중에서, 숫자가 가장 높은것만 더해
    const arr = [];
    arr.push(0);
    for (let i = 0; i < input.length; i++) {
        const t = input[i].shift();
        arr.push(t);
        input[i].shift();
        for (let j = 0; j < input[i].length; j++) {
            ind[i + 1]++;
            adj[input[i][j]].push(i + 1);
        }
    }
    const q = [];
    for (let i = 1; i < ind.length; i++) {
        if (ind[i] === 0) {
            q.push(i);
        }
    }
    const time = Array(n[0] + 1).fill(0);
    while (q.length) {
        let min = Infinity;
        let idx;
        for (let i = 0; i < q.length; i++) {
            if (arr[q[i]] < min) {
                min = arr[q[i]];
                idx = i;
            }
        }

        let cur = q.splice(idx, 1);
        time[cur] += arr[cur];
        for (let i = 0; i < adj[cur].length; i++) {
            const val = adj[cur][i];
            ind[val]--;
            time[val] = Math.max(time[val], time[cur]);
            if (ind[val] === 0) {
                q.push(val);
            }
        }
    }
    console.log(Math.max(...time));
};

ans();
