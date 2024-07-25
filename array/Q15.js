/*
15. We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."

*/

let color = ['Blue ', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow '];
let countUnit = ['th', 'st', 'nd', 'rd'];

for (let i = 0; i < color.length; i++) {
    if (i < 3) {
        process.stdout.write(i + 1 + countUnit[i + 1] + ' choiuce is ');
    } else {
        process.stdout.write(i + 1 + countUnit[0] + ' choiuce is ');
    }
    console.log(color[i]);
}
