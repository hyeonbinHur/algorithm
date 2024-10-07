const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const ans = () => {
    const eSet = new Set();
    const sSet = new Set();

    let [sStart, eStart, eEnd] = input
        .shift()
        .split(' ')
        .map((e) => e.split(':'))
        .map((e) => e.map((e2) => Number(e2)));

    sStart = sStart[0] * 60 + sStart[1];
    eStart = eStart[0] * 60 + eStart[1];
    eEnd = eEnd[0] * 60 + eEnd[1];

    for (let i = 0; i < input.length; i++) {
        let [time, name] = input[i].split(' ');
        time = time.split(':').map((e) => Number(e));
        time = time[0] * 60 + time[1];
        if (time <= sStart) {
            sSet.add(name);
        } else if (time >= eStart && time <= eEnd) {
            eSet.add(name);
        }
    }
    let count = 0;

    for (let name of sSet) {
        if (eSet.has(name)) {
            count++;
        }
    }
    console.log(count);
};
ans();
