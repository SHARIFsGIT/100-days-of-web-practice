// 1.
const fatherName = 'Father'
let season = 'rainy'
season = 'winter'

// 2.
if (fatherName === 'father' || season === 'rainy'){

}
else if (fatherName === 'Father'){

}
else {

}

// 3.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
numbers[0] = 56;

// 4.
for (let i = 0; i <numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}

// 5.
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78)

// 6.
const student ={
    name: 'Student',
    age: 34,
    movies: ['A1', 'A2']
}
const newAge = 'age'

console.log(student.age);
console.log(student['age']);
console.log(student[newAge]);

// 7.
const getNumber = () => 0;
const addNumber = num => num + 65;
const isEven = x => x % 2 == 0;
const addNumbers = (x, y, z) => x + y + z;
const multilineArrowFunction = (num3, num4) =>{
    const sum = num3 + num4;
    return sum;
}

// 8.
const newNumbers = numbers;
const newNumber = [...numbers];
numbers.push(15);
console.log(newNumbers);
console.log(newNumber);

// 9.
const currentNumbers = [...newNumber, 20]
console.log(currentNumbers)

// 10. string to number
const numStr = '560';
const num = +numStr;
const numParse = parseInt(numStr);
console.log(num)
console.log(numParse)

// 11.
const isActive = true;
const showUser = () => console.log('display-user');
const hideUser = () => console.log('hide-user');
isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || showUser();