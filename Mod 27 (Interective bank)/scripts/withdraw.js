// getting the button
const getWithdrawButton = document.getElementById('withdraw-btn');
getWithdrawButton.addEventListener('click', function(){
    const getWithdrawField = document.getElementById('withdraw-field');
    const insideWithdrawField = parseFloat(getWithdrawField.value);
    getWithdrawField.value = "";
    if (isNaN(insideWithdrawField)){
        alert('Please enter a valid number');
        return;
    }
    const getPreviousWithdrawAmount = document.getElementById('withdraw-amount');
    const insidePreviousWithdrawAmount = parseFloat(getPreviousWithdrawAmount.innerText);

    const getBalanceAmount = document.getElementById('balance-amount');
    const insidePreviousBalanceAmount = parseFloat(getBalanceAmount.innerText); 
    if(insideWithdrawField >= insidePreviousBalanceAmount){
        alert('Insufficient funds');
    }
    else{
        const totalWithdraw = insidePreviousWithdrawAmount + insideWithdrawField;
        getPreviousWithdrawAmount.innerText = totalWithdraw;
        getBalanceAmount.innerText = insidePreviousBalanceAmount - insideWithdrawField; 
    }
});