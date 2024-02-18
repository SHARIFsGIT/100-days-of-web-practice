// Arrow function with single parameter
const getAge = (person) => person.age; // returns person.age hence implicit return

const student = {name: 'Student', age: 15}

const age = getAge(student);
console.log(age);


// Arrow function with single parameter
const getThird = numbers => numbers[2];
const third = getThird([1, 2, 3, 4]);
console.log(third);


// Arrow function with no parameter
const getPI = () => Math.PI;
console.log(getPI());


// Large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}
console.log(doMath(1, 2, 3));