document.getElementById("apply-btn").addEventListener("click", function(){
    const originalPriceElement = document.getElementById("original-price");
    const originalPriceAmountString = originalPriceElement.value;
    const originalPriceAmount = parseFloat(originalPriceAmountString);

    if(isNaN(originalPriceAmount)){
        alert("Please provide valid price");
        return;
    }

    originalPriceElement.value = '';

    // discount price:
    const previousDiscountElement = document.getElementById("discount-price");
    const previousDiscountPriceString = previousDiscountElement.innerText;
    const previousDiscountPrice = parseFloat(previousDiscountPriceString);

    const couponField = document.getElementById("coupon-field");
    const couponFieldValue = couponField.value;

    if(couponFieldValue === "DISC30"){
        const discountPrice = originalPriceAmount - ((originalPriceAmount / 100) * 30);
        // set discount price:
        previousDiscountElement.innerText = discountPrice;
    }
    else{
        alert("wrong promo code")
        previousDiscountElement.innerText = originalPriceAmount;
    }
})

document.getElementById("discount").addEventListener("click", function(){
    window.location.href = 'index.html';
})