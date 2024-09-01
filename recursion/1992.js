const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)
    .map((e) => e.split(''));

const result = [];

const recursion = (rStart, rEnd, cStart, cEnd) => {
    let current = +input[rStart][cStart];

    for (let i = rStart; i < rEnd; i++) {
        for (let j = cStart; j < cEnd; j++) {
            if (+input[i][j] !== current) {
                result.push('(');
                recursion(
                    rStart,
                    parseInt((rStart + rEnd) / 2),
                    cStart,
                    parseInt((cStart + cEnd) / 2)
                );
                recursion(
                    rStart,
                    parseInt((rStart + rEnd) / 2),
                    parseInt((cStart + cEnd) / 2),
                    cEnd
                );
                recursion(
                    parseInt((rStart + rEnd) / 2),
                    rEnd,
                    cStart,
                    parseInt((cStart + cEnd) / 2)
                );
                recursion(
                    parseInt((rStart + rEnd) / 2),
                    rEnd,
                    parseInt((cStart + cEnd) / 2),
                    cEnd
                );
                result.push(')');
                return;
            }
        }
    }
    result.push(current);
    return;
};
recursion(0, input[0].length, 0, input[0].length);
console.log(result.join(''));
