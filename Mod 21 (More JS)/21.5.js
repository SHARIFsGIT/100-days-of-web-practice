function getSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log('Index:',index, 'with value:', element, '& sum of previous value:', sum);
    }
    return sum;
}
const myNumbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];
getSum(myNumbers);