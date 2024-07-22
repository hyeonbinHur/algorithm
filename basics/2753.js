const fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split(' ');

let year = +input[0];

const check = (year) => {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            console.log('1');
            return;
        } else if (year % 400 === 0) {
            console.log('1');
            return;
        } else {
            console.log('0');
            return;
        }
    } else {
        console.log('0');
        return;
    }
};
check(year);
