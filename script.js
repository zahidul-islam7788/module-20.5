const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener('click',function(){
    const amountValue = document.getElementById("amount-value").value;
    const amountNumber = parseFloat(amountValue);
    
    const totalPrice = amountNumber + 1;
    document.getElementById("amount-value").value = totalPrice;
})