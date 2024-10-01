const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const bfs = (adj, start) => {
    const q = [start];
    const visit = Array(adj.length).fill(false);
    const arr = [];
    while (q.length) {
        const current = q.shift();
        if (!visit[current]) {
            arr.push(current);
            if (adj[current]) {
                q.push(...adj[current]);
            }
            visit[current] = true;
        }
    }
    console.log(arr.join(' '));
};
const dfs = (adj, start) => {
    const stack = [start];
    const visit = Array(adj.length).fill(false);
    const arr = [];
    while (stack.length) {
        const current = stack.pop();
        if (!visit[current]) {
            if (adj[current]) {
                stack.push(...adj[current]);
            }
            visit[current] = true;
            arr.push(current);
        }
    }
    console.log(arr.join(' '));
};

const ans = () => {
    const [n, m, v] = input.shift();
    const arr = input;
    const adj = [];
    for (let i = 0; i < arr.length; i++) {
        const [a, b] = arr[i];
        if (!adj[a]) {
            adj[a] = [];
        }
        adj[a].push(b);
        if (!adj[b]) {
            adj[b] = [];
        }
        adj[b].push(a);
    }
    for (let i = 0; i < adj.length; i++) {
        if (adj[i]) {
            adj[i].sort((a, b) => b - a);
        }
    }

    dfs(adj, v);
    for (let i = 0; i < adj.length; i++) {
        if (adj[i]) {
            adj[i].sort((a, b) => a - b);
        }
    }

    bfs(adj, v);
};
ans();
