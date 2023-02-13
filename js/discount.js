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

    const discountPrice = originalPriceAmount - ((originalPriceAmount / 100) * 30);
    // set discount price:
    previousDiscountElement.innerText = discountPrice;
})

document.getElementById("semi-easy").addEventListener("click", function(){
    window.location.href = 'coupon.html';
})