const checkEvenLength = (arrOfFriends) => {
    const result = [];
  
    for (let i = 0; i < arrOfFriends.length; i++) {
        const name = arrOfFriends[i];
        if (name.length % 2 === 0) {
            result.push(name);
        }
    }
    return result;
};
const inputArray = ['John', 'James', 'Jane', 'Ratul'];

const result = checkEvenLength(inputArray);
console.log(result);
