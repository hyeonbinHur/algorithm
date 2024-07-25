/*
Write a JavaScript program that accepts a string as input and swaps the case of each character. 
For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

let string = 'The Quick Brown Fox';
let arr = [];
console.log(string);

for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
        if (Number(string[i].charCodeAt(0)) < 97) {
            let char = string[i].charCodeAt(0);
            char += 32;
            arr.push(String.fromCharCode(char));
        } else {
            let char = string[i].charCodeAt(0);
            char -= 32;
            arr.push(String.fromCharCode(char));
        }
    } else {
        arr.push(string[i]);
    }
}

console.log(arr.join(''));
