//12. Write a JavaScript program to compute the sum and product of an array of integers.
let arr = [1, 2, 3, 4, 5];

const sumOfElement = (arr) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += +arr[i];
    }
    return num;
};
console.log(sumOfElement(arr));
