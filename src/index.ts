/**
 * Calculates the total price of all items in the provided basket.
 *
 * @param basket - An array of items representing the shopping basket.
 * @returns The total price as a number, or null if an error occurs.
 */
import { calculateBasketTotal } from "./shop_basket";
import { Item } from "./types";

export function getTotal(basket: Item[]): number | null {
    try {
        return calculateBasketTotal(basket);
    } catch (error) {
        console.error("Error calculating basket total:", error);
        return null;
    }
}
