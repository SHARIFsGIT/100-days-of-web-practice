const numbers = [4, 5, 6, 7, 8, 9];
const doubled = [];

for(const number of numbers){
    const double = number * 2;
    doubled.push(double);
}
console.log(doubled)




function doubleIt(num){
console.log('Number: ', num)
    return num * 2;
}
const result = numbers.map(doubleIt)
console.log(result)


const doubleIt2 = n => n * 2;
const output = numbers.map(doubleIt2)
console.log(output)



const output2 = numbers.map(n => n * 2)
console.log(output2)




const friends = ['Tom', 'Bob', 'Jhon', 'Oliver']
const length = friends.map(friend => friend.length)
console.log(length)

const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter)