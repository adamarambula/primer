import { forEach } from "lodash";
import { it } from "mocha";

export function calculateTotal(items, tax) {
  let totalPrice = 0; // Initialize totalPrice

  const absTax = Math.abs(tax);

  items.forEach(item => {
    if (item.taxable && absTax > 0 && absTax <= 1) {
      totalPrice += item.price + (item.price * absTax);
    } else {
      totalPrice += item.price;
    }
  });

  return totalPrice; // Return the calculated total price
}