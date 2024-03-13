function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try {
        // console.log(Dhaka)
        const age = parseInt(ageText);
        if (isNaN(age)){
            // console.log('Invalid age', age, ageText)
            throw 'Please enter a valid age'
        }
        else if ((age <= 18) || (age >= 30)){
            throw 'Age must be between 18 and 30'
        }
        errorTag.innerHTML = '';
    } catch (error) {
        console.log('Error: ', error)
        errorTag.innerHTML = 'Error: ' + error;
    }
    finally{
        console.log('Success')
    }
    
    console.log(1111)
}