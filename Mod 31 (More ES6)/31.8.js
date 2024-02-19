class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}
const unknown = new Person('John', 25);
console.log(unknown)
unknown.sleep();
unknown.activity();





// Dot notation & bracket notation
const person = {
    name: 'John',
    age: 25,
    address : 'Germany',
    1: 'One'
}
console.log(person.name) // dot notation
console.log(person['age']) // bracket notation

console.log(person.1) // dot notation gives error
console.log(person['1']) // bracket notation

// variable notation
const home = 'address';
console.log(person[home])