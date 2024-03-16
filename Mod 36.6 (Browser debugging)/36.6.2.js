const alertUser = () => {
    alert('Be careful')
};


const seriousStudent = () => {
    const serious = confirm('Are you sure you want to go')
    console.log(serious)

    if (serious){
        alert('Well done');
    }
    else{
        alert('Be serious');
    }
};


const getName = () => {
    const name = prompt('Please enter your name')
    console.log(name)
};