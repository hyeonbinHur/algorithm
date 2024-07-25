/**
 * 2. Write a JavaScript function to clone an array.
 * avoid copy by reference
 */

const clonArray = (input) => {
    return input.slice(0);
};

const og1 = [1, 2, 3, 4];
const og2 = [1, 2, [3, 4]];

const clone1 = clonArray(og1);
const clone2 = clonArray(og2);

console.log(clone1 === og1);
console.log(clone2 === og2);
