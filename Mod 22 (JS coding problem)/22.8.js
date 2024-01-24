// string reverse
function reverseString(text){
    let reversed = '';
    for(var i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}
const myString = 'I am a string';
const reversed = reverseString(myString);
console.log(reversed);


// word reverse
function reverseWord(str){
    const words = str.split(' ');
    console.log('Words:', words);
    console.log('Words length:', words.length);

    const result = [];
    for(var i = words.length - 1; i >= 0; i --) {
        result.push(words[i]);
    }
    const reverseWords = result.join(' ');
    return reverseWords;
}
const myString2 = 'I am a string';
console.log(reverseWord(myString2));