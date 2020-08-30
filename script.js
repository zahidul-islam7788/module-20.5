const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener('click',function(){
    const amountValue = document.getElementById("amount-value").value;
    const amountNumber = parseFloat(amountValue);
    const totalAmount = amountNumber + 1;
    document.getElementById("amount-value").value = totalAmount;


    const phonePrice = document.getElementById("phone-price").innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    totalPrice = totalAmount * phonePriceNumber;
    document.getElementById("phone-price").innerText = totalPrice;
})