let num1 = 5;
let num2 = 10;
console.log(num1, num2);

const temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);


[num1, num2] = [num2, num1];
console.log(num1, num2);




// problem solving
let Jim = 55;
let Della = 65;
let Mim = 75;

const cake = Math.max(Jim, Della, Mim);
console.log(cake);