const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '));

const ans = () => {
    const arr = input.shift().sort();
    input.shift();
    const m = input;

    const parent = Array.from({ length: arr.length }, () => []);
    const childs = Array.from({ length: arr.length }, () => []);

    for (let i = 0; i < m.length; i++) {
        const [c, p] = m[i];
        const cIndex = arr.indexOf(c);
        const pIndex = arr.indexOf(p);

        parent[cIndex].push(pIndex);
        childs[pIndex].push(cIndex);
    }
    const pAns = [];

    for (let i = 0; i < parent.length; i++) {
        if (parent[i].length === 0) {
            pAns.push(arr[i]);
        }
    }
    const q = [];
    for (let i = 0; i < childs.length; i++) {
        if (childs[i].length === 1) {
            q.push(i);
        }
    }
    while (q.length) {
        const val = q.shift(); // 0
        const cur = childs[val][0];

        for (let j = 0; j < parent[cur].length; j++) {
            const now = parent[cur][j]; // now = 0

            if (now !== cur) {
                if (childs[now].length > 1) {
                    const chIndx = childs[now].indexOf(cur);
                    childs[now].splice(chIndx, 1);

                    if (childs[now].length === 1) {
                        q.push(now);
                    }
                }
            }
        }
    }
    childs.map((e) => e.sort((a, b) => a - b));
    console.log(pAns.length);
    console.log(pAns.join(' '));
    const chAns = [];
    for (let i = 0; i < childs.length; i++) {
        chAns[i] = [];
        chAns[i].push(arr[i]);
        chAns[i].push(childs[i].length);
        for (let j = 0; j < childs[i].length; j++) {
            chAns[i].push(arr[childs[i][j]]);
        }
    }
    chAns.map((e) => console.log(e.join(' ')));
};
ans();
