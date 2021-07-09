// let originalPrice = 100;
// let discount = 15;

// (P * (100 - discount)) / 100
const calculatePriceWithDiscount = (price, discount) => {
  const percentagePriceWithDiscount = 100 - discount;
  const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

  return priceWithDiscount;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const priceWithDiscount = calculatePriceWithDiscount =(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = `The price with discount is: ${priceWithDiscount} $`;
}

