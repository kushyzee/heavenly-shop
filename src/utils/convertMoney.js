export const convertMoney = (price, type) => {
  if (type === "toKobo") {
    return price * 100;
  } else if (type === "toNaira") {
    return price / 100;
  } else {
    return price;
  }
}