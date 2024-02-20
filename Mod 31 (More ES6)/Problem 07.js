const people = [
    { name: 'Nodi', age: 28 },
    { name: 'Akil', age: 26 },
    { name: 'Shobuj', age: 30}
];

// for loop
let totalAge = 0;
for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}
console.log(`Total age using for loop: ${totalAge}`);


// reduce method
const totalAgeUsingReduce = people.reduce((acc, person) => acc + person.age, 0);
console.log("Total age using array.reduce: ", totalAgeUsingReduce);