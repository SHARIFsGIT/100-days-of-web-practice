const student = {
    id: 12,
    class: 10,
    name: 'Sharif'
}
const students = [15, 16, 17, 18, 19, 20];

console.log(typeof student);
console.log(typeof students); // it will say object
console.log(Array.isArray(students)); // to check array

const part = students.slice(2, 4); // start from 2 and then 4th index er age end
console.log('Sliced:', part);
console.log('Original:', students);

const partition = students.splice(2, 4); // start from 2 and then 4ta element nibe
console.log('Splice:', partition);
console.log('Original:', students);

const partition2 = students.splice(2, 4, 100, 500, 50); // start from 2 and then 4ta element nibe then baki value include korebe array te
console.log('Original:', students);


//duplicate
const names = ['a', 'b', 'c', 'd', 'e', 'a', 'c', 'd', 'e'];

function removeDuplicate(names){
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);