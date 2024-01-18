function isEven (nummber){
    const remainder = nummber % 2;
    if (remainder === 0){
        console.log(nummber, 'is even');
    }
    else{
        console.log(nummber, 'is odd');
    }
}
var givenNumber = 20;
isEven(givenNumber);