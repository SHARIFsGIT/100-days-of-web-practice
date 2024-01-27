function isJavaScript(fileName) {
    if (fileName.endsWith('.js')){
        return true;
    }
    else{
        return false;
    }
}

let fileName1 = 'script.js';
let result1 = isJavaScript(fileName1);
console.log(`${fileName1} is a JavaScript file: ${result1}`);

let fileName2 = 'style.css';
let result2 = isJavaScript(fileName2);
console.log(`${fileName2} is a JavaScript file: ${result2}`);
