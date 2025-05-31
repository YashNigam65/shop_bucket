import { getTotal } from '../src/index';

describe('getTotal', () => {
  it('returns correct total for apples and bananas', () => {
    expect(getTotal(['Apple', 'Apple', 'Banana'])).toBe(35 + 35 + 20);
  });

  it('applies melon BOGOF offer', () => {
    expect(getTotal(['Melon', 'Melon', 'Melon'])).toBe(50 * 2);
  });

  it('applies lime 3-for-2 offer', () => {
    expect(getTotal(['Lime', 'Lime', 'Lime', 'Lime'])).toBe(15 * 3);
  });

  it('handles mixed basket', () => {
    expect(
      getTotal(['Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'])
    ).toBe(35 + 20 + 50 + 30);
  });

  it('returns correct total for empty basket', () => {
    expect(getTotal([])).toBe(0);
  });
});