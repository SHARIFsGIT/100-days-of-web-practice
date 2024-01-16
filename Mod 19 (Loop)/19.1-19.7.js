// if (condition){

// }

var givenNumber = 0;
while (givenNumber < 7){
    console.log('Got it ', givenNumber);
    givenNumber++;
}

var number = 0;
while (number <= 10){
    console.log(number);
    number += 2;
}

for (var number = 0; number < 10; number++) {
    console.log('Got it by for', number);
}

var numbers = [45, 55, 65, 70, 80, 100, 1];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (var i = 1; i <= 10; i++) {
    console.log('Outside value ',i);
    if (i >= 5){
        break;
    }
}

var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
    if (i > 5){
        break;
    }
}

var items = ['Apple', 'Biscuit', 'Chanachur', 'Donner', 'Egg']
for (var i = 0; i < items.length; i++){
    var item = items[i];
    if (item == 'Donner'){
        break;
    }
    console.log(item);
}

var items = ['Apple', 'Biscuit', 'Chanachur', 'Donner', 'Egg']
for (var i = 0; i < items.length; i++){
    if (items[i] == 'Chanachur'){
        continue;
    }
    console.log(items[i]);
}

var num = 10;
while (num >= 1){
    console.log(num);
    num--;
}

for (var i = 10; i >= 1; i--){
    console.log('For', i);
}