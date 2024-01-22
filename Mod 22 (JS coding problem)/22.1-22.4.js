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



// math
const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

const errorGap = num1 - num2;
if (errorGap < 5) {
    console.log('Be friend');
}
else{
    console.log('Stay apart');
}

const correctGap = Math.abs(num1 - num2);
if (correctGap < 5) {
    console.log('Be friend');
}
else{
    console.log('Stay apart');
}



// round - ceil - floor
const number = 2.4598;
const fullNumber = Math.round(number);
console.log(fullNumber)

console.log(Math.ceil(number));
console.log(Math.floor(number));


// random
console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random()*6));