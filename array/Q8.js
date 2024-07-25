/*
8. Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
*/
let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

arr.sort();

let item = null;
let mf = 0;
let cf = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        cf++;
        if (cf > mf) {
            mf = cf;
            item = arr[i];
        }
    } else {
        cf = 1;
    }
}

console.log(item, mf);
