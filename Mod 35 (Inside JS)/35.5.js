const getData = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log(num)
    if (num < 5) {
        resolve(566);
    }
    else{
        reject('Invalid');
    }
});
getData
    .then(data => console.log(data + 4))
    .catch(err => console.log(err));

