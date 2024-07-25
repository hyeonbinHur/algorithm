//17. Write a JavaScript program to shuffle an array.

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

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(shuffle(arr));
