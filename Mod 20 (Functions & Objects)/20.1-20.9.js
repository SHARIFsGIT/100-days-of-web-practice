var numbers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var slice = numbers.slice(0, 5)
console.log(slice); // [ 'A', 'B', 'C', 'D', 'E' ]

var name = 'I am learning JavaScript';
var check1 = name.includes('has');
var check2 = name.includes('learning');
console.log(check1, check2); // false true
console.log(name.substring(0, 6)); // I am l
console.log(name[6]); // its not possible name[6] = 'X' thats why array is immutable // e

// function
function startFan(){
    console.log('Stand up'); // Stand up
    console.log('Go towards'); // Go towards
    console.log('Switch on'); // Switch on
}
startFan();

function bringFruit(money){
    console.log('Give me'); // Give me
    console.log(money); // 100
}
bringFruit(100);

function bringSingara(money){
    console.log('Give me', money, 'taka'); // Give me 500 taka
    console.log('Ai nen', money, 'takar singara'); // Ai nen 500 takar singara
}
var taka = 500;
bringSingara(taka);

function add(num1, num2){
    console.log(num1, num2); // 45 15
    var sum1 = num1 + num2;
    // console.log(sum);
    // return 15;
    return sum1;
}
var total = add(45, 15);
console.log(total); // 60

function add(num1, num2){
    console.log(num1, num2); 
    // 65 15
    // 55 15
    // 80 70
    var sum2 = num1 + num2;
    // console.log(sum);
    // return 15;
    return sum2;
}
var result1 = add(65, 15);
var result2 = add(55, 15);
var finalResult = add(result1, result2);
console.log(finalResult); // 150

// object
var student = {
    id: 115,
    name: 'Santa',
    class: 9,
    marks: 94
}
console.log(student); // { id: 115, name: 'Santa', class: 9, marks: 94 }
console.log(student.marks); // 94
student.marks = 95;
console.log(student.marks); // 95

var idCount = student.id; // or
console.log(idCount); // 115

var propertyName = 'id';
var propertyValue = student[propertyName];
console.log(propertyName, propertyValue); // id 115

var idCountLikeArray = student['id'];
console.log(idCountLikeArray); // 115

var properties = Object.keys(student)
console.log(properties); // [ 'id', 'name', 'class', 'marks' ]

var propertyValues = Object.values(student)
console.log(propertyValues); // [ 115, 'Santa', 9, 95 ]

student.id = 116;
console.log(student); // { id: 116, name: 'Santa', class: 9, marks: 95 }

student['id'] = 117;
console.log(student); //{ id: 117, name: 'Santa', class: 9, marks: 95 }

student[propertyName] = 118;
console.log(student); // { id: 118, name: 'Santa', class: 9, marks: 95 }

// loop object
for (var i = 0; i < properties.length; i++){
    var propertyName = properties[i];
    console.log(propertyName);
    propertyValue = student[propertyName] // look line 73-75
    console.log(propertyValue);
}

// alternative
for (var proName in student){
    const value = student[proName]
    console.log(proName);
    console.log(value);
}



const color = 'green';
if (color === 'green'){
    console.log('Green');
}
else if (color === 'red'){
    console.log('red');
}

switch (color){
    case 'green':
        console.log('Green');
        break;
    case 'red':
        console.log('red');
        break;
    default:
        console.log('No color detected');
}