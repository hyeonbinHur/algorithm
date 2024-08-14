const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .split('\n')[0]
    .split('');
const ans = (input) => {
    // console.log(input);
    // console.log('a'.charCodeAt()); //97
    // console.log('z'.charCodeAt()); //122
    // console.log('A'.charCodeAt()); //65
    // console.log('Z'.charCodeAt()); //90

    // console.log(charAt(97));
    let ans = [];
    for (let i = 0; i < input.length; i++) {
        let a = input[i].charCodeAt();
        if (a >= 97 && a <= 122) {
            a += 13;
            if (a > 122) {
                a = a - 122 + 96;
            }
            ans.push(String.fromCharCode(a));
        } else if (a >= 65 && a <= 90) {
            a += 13;
            if (a > 90) {
                a = a - 90 + 64;
            }
            ans.push(String.fromCharCode(a));
        } else { 
            ans.push(input[i]); 
        }
    }
    console.log(ans.join(''));
};

ans(input);
