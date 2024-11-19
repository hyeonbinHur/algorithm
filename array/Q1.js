/**
 * 1. Write a JavaScript function to check whether an `input` is an array or not
 */

const isArray = (input) => {
  if (toString.call(input) === "[object Array]") {
    console.log(true);
  } else {
    console.log(false);
  }
};

isArray("w3resource");
isArray([1, 2, 4, 0]);
