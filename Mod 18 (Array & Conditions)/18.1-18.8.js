var sunglassPrice = 100; // number type variable
var crushName = 'Toktoki'; // string type variable
var isSingle = true; // boolean type variable

// Array
var friendsAge = [11, 12, 13, 14, 15];
var heroName = ['Tok', 'Toki'];

console.log(friendsAge, heroName);

var numbers = [45, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers[0]);
console.log(numbers[5]);
numbers[0] = 55;
console.log(numbers[0]);
var positionIndex = numbers.indexOf(45);
console.log(positionIndex);
var positionIndex = numbers.indexOf(55);
console.log(positionIndex);
numbers.push(16);
console.log(numbers);
numbers.pop();
console.log(numbers);
var lastElement = numbers.pop();
console.log(lastElement);
console.log(numbers);
numbers.unshift(1);
console.log(numbers);

var countries = ["Nigeria", "Ghana", "Rwanda"];
countries.unshift("Kenya");
console.log(countries); // ["Kenya","Nigeria","Ghana","Rwanda"]
countries.shift();
console.log(countries);

console.log(5>5);
console.log(5==5);
console.log(5!=5);

// money && car && result
// money || car || result

// equal value ==
// equal value and equal type ===
// != not equal
// !== not equal value not equal type

var iphonePrice = 75000;
var myBudget = 9500;

if (iphonePrice < myBudget){
    console.log('Purchased');
}
else{
    console.log('Gorib');
}


var myBudget = 95000;
if (iphonePrice < myBudget){
    console.log('Purchased');
}

var isGraduated = true;
var salary = 25000;

// if (isGraduated === true){
//     console.log('Marry');
// }
// else{
//     console.log('Single');
// }

if (isGraduated === true || salary > iphonePrice){
    console.log('Marry');
}
else{
    console.log('Single');
}

if (isGraduated === true && salary > iphonePrice){
    console.log('Marry');
}
else{
    console.log('Single');
}

var car = 1;
if (isGraduated === true && (salary > iphonePrice || car >=1)){
    console.log('Marry');
}
else{
    console.log('Single');
}

var money = 80;
var butter = 45;
var cola = 20;
var rice = 50;

if (rice < money){
    console.log('Rice purchased');
}
else if (butter < money){
    console.log('Rice fail, butter purchased');
}
else {
    console.log('Ami gorib, cola e den');
}

var math = true;
var science = false;
if (math == true){
    if (science == true){
        console.log('Good student');
    }
    else {
        console.log('Math student');
    }
}