const reverseMaker = (word)=> {
    var reversedString = word.split('').reverse().join('');
    return reversedString;
};
console.log(reverseMaker("GeeksforGeeks")); // Output: "skeeGrofskeeG"
console.log(reverseMaker("Hello")); // Output: "olleH"
