function findMax(arr){
  if (arr[0] >= arr[1] && arr[0] >= arr[2]) {
    return arr[0];
  } else if (arr[1] >= arr[0] && arr[1] >= arr[2]) {
    return arr[1];
  } else {
    return arr[2];
  }
}
let inputArray = [55, 10, 95];

let result = findMax(inputArray);
console.log(result); 
