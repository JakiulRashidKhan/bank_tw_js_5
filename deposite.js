// step -1
document.getElementById('deposite-btn').addEventListener('click',function(){
    // step-2
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount=parseFloat(newDepositeAmountString);
    // step-3
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeTotalAmountString =depositeTotal.innerText;
    const previousDepositeTotalAmount =parseFloat(previousDepositeTotalAmountString);
    // step-4
    const currentDepositeTotal = previousDepositeTotalAmount+newDepositeAmount;
    depositeTotal.innerText = currentDepositeTotal;

    // step-5
    const balanceTotal = document.getElementById('balance-total');
    const previousBalenceTotalString = balanceTotal.innerText;
    const previousBalenceTotal =parseFloat(previousBalenceTotalString);
    // step-6
    const currentBalenceTotal = previousBalenceTotal+newDepositeAmount;
    balanceTotal.innerText = currentBalenceTotal;
    // step ---
    depositeField.value ='';
});