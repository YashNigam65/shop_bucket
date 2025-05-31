import { calculateBasketTotal } from "./shop_basket";


const basket = ['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime', 'Lime'];
const total = calculateBasketTotal(basket);
console.log(`Total: Rupees ${total}`);