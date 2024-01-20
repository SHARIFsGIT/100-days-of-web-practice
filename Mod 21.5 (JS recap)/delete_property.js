function deleteProp(inputArray) {
    // Extract object and property from the input array
    var obj = inputArray[0];
    var propToDelete = inputArray[1];

    // Check if the property exists in the object
    if (obj.hasOwnProperty(propToDelete)) {
        // Delete the property
        delete obj[propToDelete];
        return 'YES';
    } else {
        return 'NO';
    }
}

console.log(deleteProp([{ fname: 'John' }, 'fname']));
console.log(deleteProp([{ lastName: 'Mithila' }, 'fname']));
