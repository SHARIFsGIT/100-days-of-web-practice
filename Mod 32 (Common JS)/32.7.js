// callback function

function greeting(greetingHandler, name){
    // console.log(greetingHandler());
    greetingHandler(name);
}
// const numbers = [1,2,3,4]
// greeting(numbers);

function GoodMorning(name){
    console.log('Good morning', name);
}

function GoodEvening(name){
    console.log('Good evening', name);
}

greeting(GoodMorning, 'Tom');
greeting(GoodEvening, 'Tom');