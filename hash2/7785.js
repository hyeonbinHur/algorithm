const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''));
const ans = () => {
    const set = new Set();
    for (let i = 0; i < input.length; i++) {
        const [who, act] = input[i].split(' ');
        if (act === 'enter') {
            set.add(who);
        } else {
            set.delete(who);
        }
    }
    const result = Array.from(set);
    console.log(result.sort().reverse().join('\n'));
};
ans();
