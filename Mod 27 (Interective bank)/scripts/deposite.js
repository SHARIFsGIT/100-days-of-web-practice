// getting the button
const getDepositeButton = document.getElementById('deposite-btn');
getDepositeButton.addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const depositeAmount = depositeField.value;
    
    const currentDeposite = document.getElementById('deposite-amount');
    const previousDepositeAmount = currentDeposite.innerText;
    currentDeposite.innerText = depositeAmount;
    depositeField.value = "";

    const totalDeposite = parseFloat(previousDepositeAmount) + parseFloat(depositeAmount);
    currentDeposite.innerText = totalDeposite;

    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceAmount = balanceAmount.innerText;
    balanceAmount.innerText = parseFloat(previousBalanceAmount) + parseFloat(depositeAmount);
});