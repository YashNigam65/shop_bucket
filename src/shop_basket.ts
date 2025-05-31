import { Item } from './types';

// Price mapping for each valid item in pence
const PRICES: Record<Item, number> = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
};

/**
 * Calculates the total price of a basket of shopping items,
 * applying special offers for Melons (BOGOF) and Limes (3 for 2).
 *
 * @param items - Array of item names (Item)
 * @returns Total price in pence
 */
export function calculateBasketTotal(items: Item[]): number {
  try {
    // Initialize counts for each valid item
    const counts: Record<Item, number> = { Apple: 0, Banana: 0, Melon: 0, Lime: 0 };
    for (const item of items) {
      if (item in counts) counts[item as Item]++;
    }

    let total = 0;
    // Apples: 35p each
    total += counts.Apple * PRICES.Apple;
    // Bananas: 20p each
    total += counts.Banana * PRICES.Banana;
    // Melons: buy one get one free
    total += Math.ceil(counts.Melon / 2) * PRICES.Melon;
    // Limes: three for the price of two
    total += (Math.floor(counts.Lime / 3) * 2 + (counts.Lime % 3)) * PRICES.Lime;

    return total;
  } catch (error) {
    console.error("Error in calculateBasketTotal:", error);
    throw error;
  }
}