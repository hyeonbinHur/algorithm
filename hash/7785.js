const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '));
const ans = () => {
    const result = new Set();
    for (let i = 0; i < input.length; i++) {
        const [who, act] = input[i];
        if (act === 'enter') {
            result.add(who);
        } else {
            result.delete(who);
        }
    }
    const arr = Array.from(result).sort().reverse();
    console.log(arr.join('\n'));
};
ans();
