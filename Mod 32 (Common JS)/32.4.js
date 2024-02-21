// type coercion or type conversion
// ==== : checks the type and value
// == : checks the value only 

const first = 2;
const second = '2';

if(first === second){
    console.log('Equal')
}
else{
    console.log('Unqual')
}



// ==== and == : checks only on primitive types
// for checking non-primitive types they choose the reference value
const third = [];
const fourth = [];

if(third === fourth){
    console.log('Equal')
}
else{
    console.log('Unqual')
}
