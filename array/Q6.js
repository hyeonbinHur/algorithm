/*
6. Write a JavaScript program that accepts a number as input and inserts dashes (-) 
between each even number.
 For example if you accept 025468 the output should be 0-254-6-8.
*/

const dash = (arr) => {
    let temp = [];
    arr.map((e, i) => {
        if (+e % 2 === 0) {
            console.log(i);
            temp.push('-', e);
        } else {
            temp.push(e);
        }
    });
    return temp;
};
const arr = [0, 1, 2, 3, 4, 5, 6];
console.log(dash(arr).join(''));
