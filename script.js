const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener('click',function(){
    const amountValue = document.getElementById("amount-value").value;
    const amountNumber = parseFloat(amountValue);
    const totalAmount = amountNumber + 1;
    document.getElementById("amount-value").value = totalAmount;

    const iphonePrice = 1219;
    const phonePrice = document.getElementById("phone-price").innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    totalPrice = phonePriceNumber + iphonePrice;
    document.getElementById("phone-price").innerText = totalPrice;


    const subtotalCost = document.getElementById("subtotal-cost").innerText;
    const subtotalCostNumber = parseFloat(subtotalCost);
    totalSubCost = iphonePrice + subtotalCostNumber;
    document.getElementById("subtotal-cost").innerText = totalSubCost;



    const totalCost = document.getElementById("total-cost").innerText;
    const totalCostNumber = parseFloat(totalCost);
    const fullTotalCost = iphonePrice + totalCostNumber;
    document.getElementById("total-cost").innerText = fullTotalCost;
})