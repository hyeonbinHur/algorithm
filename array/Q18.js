/*
18. Write a JavaScript program to perform a binary search.
Note : A binary search or half-interval search algorithm finds
the position of a specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
*/

const binary = (arr, num) => {
    let left = 0;
    let right = arr.length;
    let pivot = parseInt((left + right) / 2);
    let result = arr.sort((a, b) => a - b);

    while (1) {
        if (left > right) {
            pivot = false;
            break;
        }
        if (result[pivot] === num) {
            break;
        }
        if (num > result[pivot]) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
        // console.log(left, right, pivot);
        pivot = parseInt((left + right) / 2);
    }

    return pivot, result;
};

let arr = [1, 3, 8, 2, 9];
console.log(binary(arr, 8));
