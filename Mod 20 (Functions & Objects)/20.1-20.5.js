var numbers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var slice = numbers.slice(0, 5)
console.log(slice);

var name = 'I am learning JavaScript';
var check1 = name.includes('has');
var check2 = name.includes('learning');
console.log(check1, check2);
console.log(name.substring(0, 6));
console.log(name[6]); // its not possible name[6] = 'X' thats why array is immutable

// function
function startFan(){
    console.log('Stand up');
    console.log('Go towards');
    console.log('Switch on');
}
startFan();

function bringFruit(money){
    console.log('Give me');
    console.log(money);
}
bringFruit(100);

function bringSingara(money){
    console.log('Give me', money, 'taka');
    console.log('Ai nen', money, 'takar singara');
}
var taka = 500;
bringSingara(taka);

function add(num1, num2){
    console.log(num1, num2);
    var sum1 = num1 + num2;
    // console.log(sum);
    // return 15;
    return sum1;
}
var total = add(45, 15);
console.log(total);

function add(num1, num2){
    console.log(num1, num2);
    var sum2 = num1 + num2;
    // console.log(sum);
    // return 15;
    return sum2;
}
var result1 = add(65, 15);
var result2 = add(55, 15);
var finalResult = add(result1, result2);
console.log(finalResult);