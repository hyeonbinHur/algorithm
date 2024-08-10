// const input = require('fs')
//     .readFileSync('./dev/stdin.txt')
//     .toString()
//     .trim()
//     .split('\n')
//     .map((e) => e.replace('\r', ''));
// const ans = (input) => {
//     let og = input[0].split('');
//     let commands = input.slice(2).map((e) => e.replace('\r', '').split(' '));
//     let current = og.length;
//     for (let i = 0; i < commands.length; i++) {
//         if (commands[i][0] === 'L') {
//             if (current > 0) {
//                 current--;
//             }
//         } else if (commands[i][0] === 'D') {
//             if (current < og.length) {
//                 current++;
//             }
//         } else if (commands[i][0] === 'B') {
//             if (current !== 0) {
//                 og.splice(current - 1, 1);
//                 current--;
//             }
//         } else if (commands[i][0] === 'P') {
//             og.splice(current, 0, commands[i][1]);
//             current++;
//         }
//     }
//     console.log(og.join(''));
// };
// ans(input);
const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const ans = (input) => {
    let og = input[0].split('');
    let commands = input.slice(2).map((e) => e.split(' '));
    let l_stack = [...og];
    let r_stack = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0] === 'L' && l_stack.length) {
            r_stack.push(l_stack.pop());
        } else if (commands[i][0] === 'D' && r_stack.length) {
            l_stack.push(r_stack.pop());
        } else if (commands[i][0] === 'B') {
            l_stack.pop();
        } else if (commands[i][0] === 'P') {
            l_stack.push(commands[i][1]);
        }
    }
    l_stack = [...l_stack, ...r_stack.reverse()];
    console.log(l_stack.join(''));
};

ans(input);
