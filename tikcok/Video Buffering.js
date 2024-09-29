const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => Number(e));

const ans = () => {
    const rate = 2;
    let t = 1;
    let buffer = [];
    let ans = -1;
    while (input.length) {
        const arrive = [];
        for (let i = 0; i < rate; i++) {
            arrive.push(input.shift());
        }
        const index = buffer.indexOf(t);
        if (index === -1) {
            if (arrive.shift() !== t) {
                ans = t;
                break;
            }
            buffer = [...buffer, ...arrive];
        } else {
            buffer = [...buffer, ...arrive];
        }
        t++;
    }
    console.log(ans);
};
ans();
//30 min
