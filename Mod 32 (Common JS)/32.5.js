function add(a, b){
    // this is function scope
    const total = a + b;
    console.log(a, b);
    // this is called block scope
    if(b > 5){
        const sum = 25 * total;
    }
    // so else also have its own block scope
    else{
        const sum = total * total;
        var current = sum; // var does hoisting, it takes value to function
    }
    // won't work cause sum is not in the scope
    console.log(current);
    console.log(sum)
    return total;
}
// won't work cause total is not in the scope
// console.log(total) 
add(5, 3);




// to remove hoisting use let instead of var
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log('Outside: ', i);




// hoisting happens at the top of the print() function
// better to use implicit function
print();
function print(){
    console.log(5);
}


print10(); // now it will give an error
const print10 = function(){
    console.log(10)
}





// will give an error cause print15 will take as a variable and will take the left side hence undefined in output
var print15 = function(){
    console.log(15)
}

