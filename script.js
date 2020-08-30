
// iPhone cart 

const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener('click',function(){

    const one = 1;
    inputValueUpdate("amount-value", +1 * one);

    const iphonePrice = 1219;
    spanTextUpdate("phone-price",iphonePrice);
    spanTextUpdate("subtotal-cost",iphonePrice);
    spanTextUpdate("total-cost",iphonePrice);
})

const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener('click',function(){

    const one = 1;
    inputValueUpdate("amount-value", -1 * one);

    const iphonePrice = 1219;
    spanTextUpdate("phone-price", -1 * iphonePrice);
    spanTextUpdate("subtotal-cost", -1 * iphonePrice);
    spanTextUpdate("total-cost", -1 * iphonePrice);  
})

function inputValueUpdate(id,one){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    totalValue = one + inputValueNumber;
    document.getElementById(id).value = totalValue;
}

function spanTextUpdate(id,iphonePrice){
    const price = document.getElementById(id).innerText;
    const priceNumber = parseFloat(price);
    totalPrice = iphonePrice + priceNumber;
    document.getElementById(id).innerText = totalPrice;
}

// phoneCase cart 

const casePlusBtn = document.getElementById("case-plusBtn");
casePlusBtn.addEventListener('click',function(){

    const one = 1;
    inputValueUpdate("case-amount-value", +1 * one);

    const casePrice = 59;
    spanTextUpdate("case-price",casePrice);
    spanTextUpdate("subtotal-cost",casePrice);
    spanTextUpdate("total-cost",casePrice);
})

const caseMinusBtn = document.getElementById("case-minusBtn");
caseMinusBtn.addEventListener('click',function(){

    const one = 1;
    inputValueUpdate("case-amount-value", -1 * one);

    const casePrice = 59;
    spanTextUpdate("case-price", -1 * casePrice);
    spanTextUpdate("subtotal-cost", -1 * casePrice);
    spanTextUpdate("total-cost", -1 * casePrice);  
})

function inputValueUpdate(id,one){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    totalValue = one + inputValueNumber;
    document.getElementById(id).value = totalValue;
}

function spanTextUpdate(id,casePrice){
    const price = document.getElementById(id).innerText;
    const priceNumber = parseFloat(price);
    totalPrice = casePrice + priceNumber;
    document.getElementById(id).innerText = totalPrice;
}