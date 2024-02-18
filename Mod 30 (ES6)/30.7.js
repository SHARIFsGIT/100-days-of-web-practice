// distructure
const actor = {
    name: 'Ananta',
    age: 36,
    phone: '01795394787',
    money: 800
}
console.log(actor.phone)

const age = actor.age;
console.log(age)

const {money, name, phone: number} = actor; // distructure & alias in phone
console.log(money)
console.log(name)
console.log(number)


const numbers = [45, 99]
const [first, second] = numbers;
const [third, fourth] = [55, 100]

// distructure in function
function doubleThem(a, b){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo)

var [color1, color2] = ['red', 'green', 'blue', 'orange']; // blue, orange doesn't set
console.log(color1, color2)


let [n1, , n3] = [1, 2, 3]
console.log(n1)
console.log(n3)