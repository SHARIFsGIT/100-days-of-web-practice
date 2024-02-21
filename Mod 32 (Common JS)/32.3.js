// true:
// 1. true
// 2. any number +ve or -vr will be true but not 0
// 3. any string including white space will be true else empty string 
// 4. undefined will be false
// 5. null will be false
// 6. object will be true
// 7. array will be true

const x = null;
if(x){
    console.log('Value of x is true');
}
else{
    console.log('Value of x is false');
}


// optional: check false
if(x === false){

}
// or
if(!x){
    console.log('Value of x is false');
}

// optional: check true
const z = ' ';
if(!!z){
    console.log('Value of z is true');
}