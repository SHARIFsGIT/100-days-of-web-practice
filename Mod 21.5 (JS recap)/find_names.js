const findNames = (arrOfObj) => {
    const names = [];

    for (let i = 0; i < arrOfObj.length; i++) {
        names.push(arrOfObj[i].name);
    }

    return names;
}

const sampleInput = [
    { name: 'John', age: 20 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 30 }
];

const sampleOutput = findNames(sampleInput);
console.log(sampleOutput);
  
