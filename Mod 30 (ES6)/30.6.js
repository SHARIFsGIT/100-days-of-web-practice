const max = Math.max(6, 26, 1, 86, 6);
console.log(max)


const numbers = [3, 4, 5, 6, 7, 8];
const arrayMax1 = Math.max(numbers)
console.log(arrayMax1) // NaN

const arrayMax2 = Math.max(...numbers) // spread operator
console.log(arrayMax2)



const friends = [1, 2, 3];
const bondhu = friends;
const dosto = [...friends]; // don't keep the references
bondhu.push(12);
console.log(bondhu);
console.log(friends); // kept the same reference
console.log(dosto);

bondhu.push(100);
console.log(bondhu);
console.log(friends);
console.log(dosto);

const dosto2 = [85, ...friends, 99];
console.log(dosto2);

