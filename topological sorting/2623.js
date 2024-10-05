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
    const adj = Array.from({ length: n + 1 }, () => []);
    const ind = Array(n + 1).fill(0);
    const arr = input;
    for (let i = 0; i < arr.length; i++) {
        let from = arr[i][1];
        for (let j = 2; j < arr[i].length; j++) {
            adj[from].push(arr[i][j]);
            ind[arr[i][j]]++;
            from = arr[i][j];
        }
    }

    const q = [];
    for (let i = 1; i <= n; i++) {
        if (ind[i] === 0) {
            q.push(i);
        }
    }
    const result = [];
    while (q.length) {
        const cur = q.shift();
        result.push(cur);

        for (let i = 0; i < adj[cur].length; i++) {
            const val = adj[cur][i];
            ind[val]--;
            if (ind[val] === 0) q.push(val);
        }
    }
    for (let i = 0; i < ind.length; i++) {
        if (ind[i] !== 0) {
            console.log(0);
            return;
        }
    }
    console.log(result.join('\n'));
};
ans();
