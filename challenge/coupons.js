const coupons = [
  'coupon 1',
  'coupon 2',
  'coupon 3',
  'coupon 4',
]

const calculatePriceWithDiscount = (price, discount) => {
  const percentagePriceWithDiscount = 100 - discount;
  const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

  return priceWithDiscount;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  const resultCoupon = document.getElementById("priceWithCoupon")

  //const priceWithDiscount = calculatePriceWithDiscount =(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = `The price with discount is: ${priceWithDiscount} $`;
    
  let discount;
  let priceWithDiscount; 

  switch(true) {
    case couponValue === 'coupon 1':
    discount = 15;
      priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);
      resultCoupon.innerText =`the price with Discount: $${priceWithDiscount} $`;
    break;
    case couponValue === 'coupon 2':
    discount = 25;
      priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);
      resultCoupon.innerText =`the price with Discount: $${priceWithDiscount} $`;
    break;
    case couponValue === 'coupon 3':
    discount = 30;
      priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);
      resultCoupon.innerText =`the price with Discount: ${priceWithDiscount} $`;
    break;
    case couponValue === 'coupon 4':
    discount = 40;
      priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);
      resultCoupon.innerText =`the price with Discount: ${priceWithDiscount} $`
    break;
    default:
      resultCoupon.innerText = "The coupon is not validate";
  }
}