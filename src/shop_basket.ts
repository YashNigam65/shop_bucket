import { Item } from './types';

const PRICES: Record<Item, number> = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
};

export function calculateBasketTotal(items: string[]): number {
  const counts: Record<Item, number> = { Apple: 0, Banana: 0, Melon: 0, Lime: 0 };
  for (const item of items) {
    if (item in counts) counts[item as Item]++;
  }

  let total = 0;
  total += counts.Apple * PRICES.Apple;
  total += counts.Banana * PRICES.Banana;
  total += Math.ceil(counts.Melon / 2) * PRICES.Melon;
  total += (Math.floor(counts.Lime / 3) * 2 + (counts.Lime % 3)) * PRICES.Lime;

  return total;
}