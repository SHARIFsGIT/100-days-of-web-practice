document.getElementById('btn-deposite').addEventListener('click', function(){
    /*
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    depositeField.value = '';

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const newDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = newDepositeTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotalAmount + newDepositeAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    */

    const newDepositeAmount = getInputFieldValueById('deposite-field');
    const previousDepositeTotal = getTextElementValueById('deposite-total');

    // calculate
    const newDepositeTotal = previousDepositeTotal + newDepositeAmount;
    // set deposite total value
    setTextElementValueById('deposite-total', newDepositeTotal);

    // get previous balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    // calculate previous balance
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
});