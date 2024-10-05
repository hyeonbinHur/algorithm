const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans2 = (n, target, testCase, arr) => {
    const t = target[0];
    arr.unshift(0);
    const ind = Array(n + 1).fill(0);
    const adj = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < testCase.length; i++) {
        const [from, to] = testCase[i];
        ind[to]++;
        adj[from].push(to);
    }

    const time = Array(n + 1).fill(0);

    const q = [];

    for (let i = 1; i < ind.length; i++) {
        if (ind[i] === 0) {
            q.push(i);
        }
    }

    while (q.length) {
        const cur = q.shift();
        time[cur] += arr[cur];
        if (cur === target) {
            break;
        }
        for (let i = 0; i < adj[cur].length; i++) {
            const val = adj[cur][i];
            ind[val]--;
            time[val] = Math.max(time[val], time[cur]);
            if (ind[val] === 0) {
                q.push(val);
            }
        }
    }
    console.log(time[target]);
};

const ans = () => {
    const t = input.shift();

    for (let i = 0; i < t[0]; i++) {
        const [n, k] = input.shift();
        const arr = input.shift();
        const c = input.splice(0, k);
        const target = input.shift();
        ans2(n, target, c, arr);
    }
};
ans();
