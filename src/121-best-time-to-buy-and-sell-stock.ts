function maxProfit(prices: number[]): number {
  let result = 0;
  let minPrice = Number.MAX_VALUE;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > result) {
      result = price - minPrice;
    }
  }

  return result;
}
