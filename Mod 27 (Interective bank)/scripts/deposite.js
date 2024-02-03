// getting the button
const getDepositeButton = document.getElementById('deposite-btn');
getDepositeButton.addEventListener('click', function(){
    const getDepositeField = document.getElementById('deposite-field');
    const insideDepositeField = parseFloat(getDepositeField.value);
    getDepositeField.value = "";
    if (isNaN(insideDepositeField)){
        alert('Please enter a valid number');
        return;
    }
    const getPreviousDepositeAmount = document.getElementById('deposite-amount');
    const insidePreviousDepositeAmount = parseFloat(getPreviousDepositeAmount.innerText);

    const totalDeposite = insidePreviousDepositeAmount + insideDepositeField;
    getPreviousDepositeAmount.innerText = totalDeposite;

    const getBalanceAmount = document.getElementById('balance-amount');
    const insidePreviousBalanceAmount = parseFloat(getBalanceAmount.innerText);
    getBalanceAmount.innerText = insidePreviousBalanceAmount + insideDepositeField;
});
