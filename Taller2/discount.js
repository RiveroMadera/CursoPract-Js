// let originalPrice = 100;
// let discount = 15;

// (P * (100 - discount)) / 100
const calculatePriceWithDiscount = (price, discount) => {
  const percentagePriceWithDiscount = 100 - discount;
  const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

  return priceWithDiscount;
}


