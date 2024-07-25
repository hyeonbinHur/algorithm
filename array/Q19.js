/*
19. There are two arrays with individual values. Write a JavaScript program to compute
the sum of each individual index value in the given array.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
*/

const sumEach = (arr1, arr2) => {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3[i] = arr1[i] + arr2[i];
    }
    return arr3;
};
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
console.log(sumEach(array1, array2));
