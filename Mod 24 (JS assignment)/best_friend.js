function isBestFriend(obj1, obj2) {
    return obj1.name === obj2.friend && obj1.friend === obj2.name;
}

const person1 = { name: "Alice", friend: "Bob" };
const person2 = { name: "Raz", friend: "Alice" };

const result = isBestFriend(person1, person2);
console.log(result);
