
            /*  first way banking */

// Deposit 
function getInputValue(inputId){
    const InputField  = document.getElementById(inputId);

    const inputAmmountText = InputField.value;
    const AmountValue = parseFloat(inputAmmountText);

     //clear input field
     InputField.value = '';

    return AmountValue;
}

// withdraw
function updateTotalfield(totalFieldId , amount){

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;

    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}

// Balance

function updateBalance(amount, isAdd){

    const balanceTotal = document.getElementById('balance-total');

    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);  */

    const previousBalanceTotal = getCurrentBalance();
    
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}



 /*  2nd way banking but now comment kora */

document.getElementById('deposit-button').addEventListener('click' ,function(){

    /*
     const depositInput  = document.getElementById('deposit-input');

    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
 */
  

    //get and update  deposit total 

    /*
     const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount; 
    */

    const depositAmount = getInputValue('deposit-input');
     /* error handling start deposit   */
    if(depositAmount >0){
        updateTotalfield( 'deposit-total', depositAmount);
        updateBalance(depositAmount , true);
    }
     /* error handling end deposit  */
   
   
    
    //update balance 

    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; 
    */

    //clear input filed
    // depositInput.value = '';

   
    
});


//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click' , function(){
    
   /*  const withdrawInput = document.getElementById('withdraw-input');
    
    const withdrawAmountText = withdrawInput.value;

    const withdrawAmount = parseFloat(withdrawAmountText); */

    

    //get and update withdraw total

   /*  const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawTotalText = withdrawTotal.innerText;

    const previousWithdrawTotal  = parseFloat(previousWithdrawTotalText); 
    
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    */

   

    

    //update balance after withdraw

    /*
     const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    balanceTotal.innerText 
    = previousBalanceTotal - withdrawAmount ; 
     */

    //clear withdarw input field

    // withdrawInput.value = '';

    
    const withdrawAmount = getInputValue('withdraw-input');

    const currentBalance = getCurrentBalance();
      /* error handling start withdraw   */
    if(withdrawAmount >0 && withdrawAmount < currentBalance ){
        updateTotalfield('withdraw-total', withdrawAmount);

        updateBalance(withdrawAmount , false);
    }
    if(withdrawAmount > currentBalance){
       console.log('you can not ') 
    }
     /* error handling end withdraw   */
});

// error handling 



