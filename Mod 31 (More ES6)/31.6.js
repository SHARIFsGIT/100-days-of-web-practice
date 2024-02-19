const products = [
    {id: 1, name: 'John', age:50},
    {id: 2, name: 'Haki', age:46},
    {id: 3, name: 'Mitz', age:15},
    {id: 4, name: 'Luna', age:36}
]

// Similarities maintain by class: has some properties, methods
class Product{
    // variables
    country = 'US';
    // constructor
    constructor(name){
        this.name = name;
    }
    // function
    speak(talk){
        console.log(`Talking about ${talk}`);
    }
}
const lenevo = new Product('New York');
lenevo.speak('Hello');
console.log(lenevo);



class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(sub){
        console.log(`Teaching ${sub}`);
    }
}
const tapan = new Teacher('Shajahan Tapan', 'Physics');
console.log(tapan)
tapan.lecture('Physics');

const rashid = new Teacher('Rashid ul islam', 'English');
console.log(rashid)
tapan.lecture('English');