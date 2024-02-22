// arguments
function sum (a, b, c){
    console.log(arguments[4]); // array like object so we cant push 
    const args = [...arguments]
    console.log(args)
    const result = a + b + c;
    return result;
}
const total = sum(45, 89, 12, 59, 66);
console.log(total)
console.log(sum.length) // gives number of parameters




// pass by 
// primitive type are passed by value
let n1 = 5;
let n2 = 7;
function multiply (num1, num2){
    num1 = 27;
    const result = num1 * num2;
    return result;
}
console.log(n1);
const output = multiply(n1, n2);
console.log(output)
console.log(n1); // so n1 is unchanged




// object and array pass by reference
let student1 = {name: 'Ananta', partner: 'Barsha'}
let student2 = {name: 'Raj', partner: 'Pori'}
function movie(couple1, couple2){
    couple1.name = 'Jalil';
    couple2.partner = 'Mim';
}
console.log(student1, student2)
movie(student1, student2)
console.log(student1, student2)
