document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    
    withdrawTotalElement.innerText = currentWithdrawTotal;
//    balance total
    const balanceTotalElement = document.getElementById('balane-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  
    balanceTotalElement.innerText = newBalanceTotal;


    // last stage
    withdrawField.value = '';





    
})