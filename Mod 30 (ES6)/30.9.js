const numbers = [1, 2, 3];

for(let index = 0; index < numbers.length; index++){
    console.log(numbers[index]);
}

for (const number of numbers){
    console.log(number);
}

const name = 'Sharif';
for (const character of name){
    console.log(character);
}


const glass = {
    name: 'glass', 
    color: 'white', 
    price: 50, 
    isCleaned: true
};

// for(const key of glass){
//     console.log(key);
// }

for(const key in glass){
    const value =glass[key];
    console.log(key, value);
}

const keys = Object.keys(glass)
console.log(keys)

for(const key of keys){
    console.log(key,glass[key]);
}