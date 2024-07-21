let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split(' ');

const a = +input[0];

const result = (mark) => {
    if (mark >= 90) {
        console.log('A');
        return;
    } else if (mark >= 80) {
        console.log('B');
        return;
    } else if (mark >= 70) {
        console.log('C');
        return;
    } else if (mark >= 60) {
        console.log('D');
        return;
    } else {
        console.log('F');
        return;
    }
};

result(a);
