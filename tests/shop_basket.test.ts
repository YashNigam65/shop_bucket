import { calculateBasketTotal } from '../src/shop_basket';

describe('calculateBasketTotal', () => {
  it('calculates total for apples and bananas', () => {
    expect(calculateBasketTotal(['Apple', 'Apple', 'Banana'])).toBe(35 + 35 + 20);
  });

  it('applies melon BOGOF offer', () => {
    expect(calculateBasketTotal(['Melon', 'Melon', 'Melon'])).toBe(50 * 2);
  });

  it('applies lime 3-for-2 offer', () => {
    expect(calculateBasketTotal(['Lime', 'Lime', 'Lime', 'Lime'])).toBe(15 * 3);
  });

  it('handles mixed basket', () => {
    expect(
      calculateBasketTotal(['Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'])
    ).toBe(35 + 20 + 50 + 30);
  });

  it('ignores unknown items', () => {
    expect(calculateBasketTotal(['Apple', 'Unknown', 'Banana'])).toBe(35 + 20);
  });
});