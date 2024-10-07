const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = () => {
    const s = input[0];
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            if (!set.has(s.slice(i, j))) {
                set.add(s.slice(i, j));
            }
        }
    }
    console.log(set.size);
    // console.log(set);
};
ans();
