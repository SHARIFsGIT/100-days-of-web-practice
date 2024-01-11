console.log(5);

var age = 18;
var price = 580;

var name = 'sharif';

var decision = true;

var user_home_address = "Bremen"; // snake case
var userHomeAddress = "Bremen"; // camel case
var UserHomeAddress = "Bremen"; // pascal case

var onionPrice = 20;
var eggPrice = 20;
var totalPrice = onionPrice + eggPrice;
console.log(onionPrice);
console.log(onionPrice+eggPrice);
console.log(totalPrice);

// variable declaration
var tomatoPrice = 20;
tomatoPrice = 50;

var price1 = 31;
var price2 = 10;

price1 = 35;
price1 = 10 + price1;
price1 += 10;
price1 -= 10;
price1 *= 10;
price1 /= 10;
console.log(price1);

var age = 15;
age++; 

var firstName = "Jenny";
var lastName = "Moi"
var fullName = firstName + " " + lastName;
console.log(fullName);

var price3 = "30";
var price4 = "40";
var totalPrice = price3+price4;
console.log(totalPrice);

var price3 = 30;
var price4 = "40";
var totalPrice = price3+price4;
console.log(totalPrice);

// convert string to number
price4 = parseInt(price4)
console.log(price4);

var gpa = "3.69";
var gpaNumber1 = parseFloat(gpa);
var gpaNumber2 = parseInt(gpa);
console.log(gpaNumber1, gpaNumber2);
console.log(typeof gpaNumber1);
console.log(typeof gpa);

var isHappy = true;
console.log(typeof isHappy);

var romantic;
console.log(romantic);

var number1 = 0.1;
var number2 = 0.2;
console.log(number1+number2);
// console.log(toFixed(number1+number2)); // error throw kore.. 
sum = number1+number2;
sum = sum.toFixed(5); // string return kore.. 
console.log(sum);
sum = parseFloat(sum)
console.log(sum);

// reminder check
var mangoes = 7;
var person = 2;
console.log(mangoes/person);
console.log(mangoes%person);