//11. Write a JavaScript program to find the sum of squares of a numerical vector.
let arr = [0, 1, 2, 3, 4];
let n = 0;
for (let i = 0; i < arr.length; i++) {
    n += arr[i] * arr[i];
}
console.log(n);
