// getting the withdrawn button

const withdrawnButton = document.getElementById('withdraw-btn');
withdrawnButton.addEventListener('click', function(){
    const withdrawnField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawnField.value;

    const currentWithdraw = document.getElementById('withdraw-amount');
    const previousWithdrawAmount = currentWithdraw.innerText;
    currentWithdraw.innerText = withdrawAmount;
    withdrawnField.value = "";

    const totalWithdraw = parseFloat(previousWithdrawAmount) + parseFloat(withdrawAmount);
    currentWithdraw.innerText = totalWithdraw;

    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceAmount = balanceAmount.innerText;
    balanceAmount.innerText = parseFloat(previousBalanceAmount) - parseFloat(withdrawAmount);
});