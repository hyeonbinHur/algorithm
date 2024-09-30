const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const start = input[0];
    const end = input[1];
    const compltion = [];
    for (let i = 0; i < start.length; i++) {
        compltion.push([start[i], start[i] + end[i]]);
    }
    compltion.sort((a, b) => a[0] - b[0]);

    const result = [];
    const server = [];
    for (let i = 0; i < compltion.length; i++) {
        if (i === 0) {
            server.push(compltion[i]);
            result.push(1);
        } else {
            let [currentStart, currentEnd] = compltion[i];
            let flag = false;
            for (let j = 0; j < server.length; j++) {
                let [serverStart, serverEnd] = server[j];
                if (currentStart >= serverEnd) {
                    server[j] = [currentStart, currentEnd];
                    result.push(j + 1);
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                server.push(compltion[i]);
                result.push(server.length);
            }
        }
    }
    console.log(result);
};
ans();
