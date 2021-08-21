// update extra  cost price
function updateCost(extraProductId, cost) {
  const extraProduct = document.getElementById(extraProductId);
  extraProduct.innerText = cost;
  updateTotalPrice();
}
// update total price
function updateTotalPrice() {
  const memoryCost = document.getElementById('memory-cost').innerText;
  const storageCost = document.getElementById('storage-cost').innerText;
  const deliveryCost = document.getElementById('delivery-charge').innerText;
  const totalCost = 1299 + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
  document.getElementById('total-price').innerText = totalCost;
  // update to final price
  document.getElementById('final-price').innerText = totalCost;
  return totalCost;
}
// update final price after appling promo code
function updateFinalPrice() {
  const finalPrice = document.getElementById('final-price');
  const previousFinalPrice = updateTotalPrice();
  const promoCode = document.getElementById('promo-code');
  if (promoCode.value == 'stevekaku') {
    const promoOffer = previousFinalPrice * 0.2;
    finalPrice.innerText = previousFinalPrice - promoOffer;
    promoCode.value = '';
  }
}

// event handler for memory cost button
document.getElementById('memory-8gb').addEventListener('click', function () {
  updateCost('memory-cost', 0);
});
document.getElementById('memory-16gb').addEventListener('click', function () {
  updateCost('memory-cost', 180);
});
// event handler for storage cost button
document.getElementById('storage-256gb').addEventListener('click', function () {
  updateCost('storage-cost', 0);
});
document.getElementById('storage-512gb').addEventListener('click', function () {
  updateCost('storage-cost', 100);
});
document.getElementById('storage-1tb').addEventListener('click', function () {
  updateCost('storage-cost', 180);
});
// event handler for delivery charge button
document.getElementById('prime-delivery').addEventListener('click', function () {
  updateCost('delivery-charge', 0);
});
document.getElementById('charged-delivery').addEventListener('click', function () {
  updateCost('delivery-charge', 20);
});

// promo code event handler
document.getElementById('promo-btn').addEventListener('click', function () {
  updateFinalPrice();
});