// Given numbers
const num1 = 13;
const num2 = 79;
const num3 = 45;

// Compare numbers to find the largest
if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is: " + num2);
} else {
    console.log("The largest number is: " + num3);
}
