//14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

const arr = [1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 8];

const removeDupl = (arr) => {
    let newArr = arr.sort();
    let result = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== newArr[i - 1]) {
            result.push(newArr[i]);
        }
    }

    return result;
};
console.log(removeDupl(arr));
