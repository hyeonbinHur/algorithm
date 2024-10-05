const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const [n, m] = input.shift();
    const arr = input;
    const ind = Array(n + 1).fill(0);
    const adj = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < arr.length; i++) {
        const [from, to] = arr[i];
        ind[to]++;
        adj[from].push(to);
    }

    const q = [];
    for (let i = 1; i <= n; i++) {
        if (ind[i] === 0) {
            q.push(i);
        }
    }
    const ans = [];
    while (q.length) {
        let min = Infinity;
        let idx;
        for (let i = 0; i < q.length; i++) {
            let val = q[i];
            if (ind[val] === 0) {
                if (val < min) {
                    min = val;
                    idx = i;
                }
            }
        }
        ans.push(min);
        q.splice(idx, 1);
        for (let i = adj[min].length - 1; i >= 0; i--) {
            const val = adj[min][i];
            ind[val]--;
            if (ind[val] === 0) {
                if (val < q[0]) {
                    q.unshift(val);
                } else {
                    q.push(val);
                }
            }
        }
    }
    console.log(ans.join(' '));
};
ans();
