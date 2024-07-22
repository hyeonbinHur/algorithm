const input = require('fs').readFileSync(0).toString().trim().split('\n');
const A = Number(input[0]);
const B = Number(input[1]);

if (A > 0 && B > 0) {
    console.log(1);
} else if (B > 0 && A < 0) {
    console.log(2);
} else if (B < 0 && A < 0) {
    console.log(3);
} else {
    console.log(4);
}
