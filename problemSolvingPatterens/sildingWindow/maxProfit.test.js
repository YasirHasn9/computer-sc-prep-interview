// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/*
The idea is we are given an array of numbers, each number represents a price of a stock at the given day which is prices[i], then we should 
find the perfect day to buy and the best day to sell, then boom we have a profit.

problem aside..
I think, this is how AI works, checking many patterns to find a rhythm, then suggest it. 

anyways, we are gonna use technique called sliding window, its unable us to search a subset within a data and keep track of it 
its useful for searching a subarray within and array or substring within a string

we are gonna create two pointers left and right. left gonna start at 0 and right at 1 
lets say left is the day you buy, and right is the day you sell, which means the day on the right should be greater than the one on the left,
so that it can make a profit. our current profit at the moment is 0, when we find a profit, we should update it.


let say we have 
prices = [ 6,7,1,5,3,6]
max_profit = 0
we check   
price[left = 0] < prices[right = 1] => 6 < 7 = 1  ✔
then we are gonna update our profit  
if currentBuySelling > 0, then make the max_profit the currentBuySelling 
otherwise make the seller day is the buying day, and move the selling to the day after it. In that case, right should be always moving 
 */

function maxProfit(prices) {
  let profit = 0;
  let left = 0,
    right = 1;
  while (right < prices.length) {
    let currentProfit = prices[right] - prices[left];
    if (prices[left] < prices[right]) {
      // currentProfit > 0
      profit = Math.max(currentProfit, profit);
    } else {
      left = right;
    }
    right++;
  }

  return profit;
}

describe("maxProfit()", () => {
  test("It should return the max profit of buying and selling stocks", () => {
    // making profit
    let prices = [6, 7, 1, 5, 3, 6];
    let profit = 5;
    expect(maxProfit(prices)).toBe(profit);

    // making none
    expect(maxProfit([4, 3, 2, 1])).toBe(0);
  });
});
