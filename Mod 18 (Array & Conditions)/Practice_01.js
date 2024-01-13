var fruits = ['Apple', 'Banana', 'Orange'];

// Find index of Banana
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);

// Replace Banana with Mango
fruits[1] = 'Mango';
console.log(fruits);

// Remove Orange and add Watermelon
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);