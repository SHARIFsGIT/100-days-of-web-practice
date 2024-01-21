// lowercase
const userName = 'blackPink';
const userInput = 'blackpink';

if(userName.toLowerCase === userInput.toLowerCase){
    console.log('Valid user');
}
else{
    console.log('Invalid user')
}


// search
const text = 'I am a student at the University of Bremen';
const textLowerCase = text.toLowerCase();

const searchString = 'bremen';
const searchLowerCase = searchString.toLowerCase();

const doesExist = textLowerCase.includes(searchLowerCase);
console.log(doesExist);

const doesExistOneLine = text.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);


// indexOf
console.log(text.indexOf('University'));
console.log(text.indexOf('university'));

if(text.indexOf('Student') !== -1){
    console.log('exists');
}
else{
    console.log('not found');
}


// starts with
console.log(text.startsWith('I'));


// ends with
const fileName = 'my_biodata.pdf';
const otherFile = 'my_pic.png';

console.log(fileName.endsWith('.pdf'));


// split
const parts = text.split(' ');
console.log(parts)
const sentences = text.split('.');
console.log(sentences)
const chars = text.split('');
console.log(chars)


// slice
const partial = text.slice(5, 10);
console.log(partial)


// substring
const partial2 = text.substring(5, 10);
console.log(partial2)


// at
const gettingByAt = text.at(5);
console.log(gettingByAt)


// trim
const geeting = '   Good morning   ';
console.log(geeting.trim())


// concat
const str1 = 'Good';
const str2 = 'morning';
console.log(str1.concat(' ', str2))



// join
const lines = [
    'Hello, world',
    'I am Shakespeare.'
];
console.log(lines.join('. '))