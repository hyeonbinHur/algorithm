const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const ans = (input) => {
    // console.log(' '.charCodeAt()); // 32
    // console.log('a'.charCodeAt()); // 97
    // console.log('z'.charCodeAt()); // 122
    // console.log('A'.charCodeAt()); // 65
    // console.log('Z'.charCodeAt()); // 90
    if (input[input.length - 1] === '') input.pop();
    let ans = [];
    for (let i = 0; i < input.length; i++) {
        let U = 0;
        let L = 0;
        let N = 0;
        let S = 0;

        for (let j = 0; j < input[i].length; j++) {
            let n = input[i][j].charCodeAt();
            if (n === 32) {
                S++;
            } else if (n >= 97 && n <= 122) {
                L++;
            } else if (n >= 65 && n <= 90) {
                U++;
            } else {
                N++;
            }
        }

        ans.push([L, U, N, S]);
    }
    console.log(ans.map((e) => e.join(' ')).join('\n'));
};

ans(input);

// const texts = require('fs')
//     .readFileSync('./dev/stdin.txt')
//     .toString()
//     .split('\n');
// if (texts[texts.length - 1] === '') texts.pop();
// texts.forEach((i) => {
//     let d = '';
//     [/[a-z]/g, /[A-Z]/g, /\d/g, /[ ]/g].forEach(
//         (reg) => (d += i.match(reg) ? i.match(reg).length + ' ' : '0 ')
//     );
//     console.log(d.slice(0, d.length - 1));
// });
