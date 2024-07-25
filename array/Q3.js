/**
 *  Write a JavaScript function to get the first element of an array.
 *  Passing the parameter 'n' will return the first 'n' elements of the array.
 */

const first = (arr, n = 1) => {
    return arr.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
