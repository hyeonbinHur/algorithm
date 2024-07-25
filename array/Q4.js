/*
4. Write a JavaScript function to get the last element of an array. 
Passing the parameter 'n' will return the last 'n' elements of the array.
*/

const last = (arr, n = 1) => {
    if (n > arr.length - 1) n = arr.length;
    return arr.slice(arr.length - n, arr.length);
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
