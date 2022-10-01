// 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount =parseFloat(newWithdrawAmountString);
    // 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotal.innerText;
    const previousWithdrawTotal =parseFloat(previousWithdrawTotalString);
    // 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;
    // 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalenceTotalString = balanceTotal.innerText;
    const previousBalenceTotal =parseFloat(previousBalenceTotalString);
    // 
    const currentBalenceTotal = previousBalenceTotal-newWithdrawAmount;
    balanceTotal.innerText = currentBalenceTotal;
    // 
    withdrawField.value ='';
});