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
    const ind = Array(n + 1).fill(0);
    const adj = Array.from({ length: n + 1 }, () => []);
    ind[0] = Infinity;

    for (let i = 0; i < m; i++) {
        const [front, back] = input[i];
        ind[back]++;
        if (!adj[front]) {
            adj[front] = [];
        }
        adj[front].push(back);
    }
    const q = [];
    for (let i = 1; i <= n; i++) {
        if (ind[i] === 0) q.push(i);
    }
    const result = [];
    while (q.length) {
        const cur = q.shift();
        result.push(cur);
        for (let i = 0; i < adj[cur].length; i++) {
            const val = adj[cur][i];
            ind[val]--;
            if (ind[val] === 0) {
                q.push(val);
            }
        }
    }
    console.log(result.join(' '));
};

ans();
