const today = new Date();
console.log(today)

const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');

if (date1 > date2) {
    console.log('March')
}
else{
    console.log('December')
}

if (date1.getTime() < date2.getTime()) {
    console.log('March')
}
else{
    console.log('December')
}


const number = '23';
if (typeof number === 'string') {
    console.log('String')
}
else{
    console.log('Number')
}

const array = [3, 4, 5, 6, 7, 8];
const student = {name: 'Student', age: 20};
console.log(typeof array);
console.log(typeof student);

console.log(Array.isArray(array))
console.log(Array.isArray(student))