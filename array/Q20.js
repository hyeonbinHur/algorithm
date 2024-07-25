/*
20. Write a JavaScript program to find duplicate values in a JavaScript array.
*/

const findDuple = (arr) => {
    let result = [];
    let temp = arr.sort();

    for (let i = 0; i < arr.length; i++) {
        if (temp[i] === temp[i - 1]) {
            const index = result.indexOf(temp[i]);
            if (index === -1) {
                result.push(temp[i]);
            }
        }
    }
    return result;
};

const shuffle = (arr) => {
    let newArray = Array(arr.length).fill(false);

    for (let i = 0; i < arr.length; i++) {
        while (1) {
            let index = parseInt(Math.random() * arr.length);
            if (newArray[index] === false) {
                newArray[index] = arr[i];
                break;
            }
        }
    }

    return newArray;
};

const arr = [1, 1, 1, 3, 3, 2, 4, 5, 6, 7, 7, 7];

const test = shuffle(arr);

console.log(test);

console.log(findDuple(test));
