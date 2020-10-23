// Leetcode Question #121: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {

    let buy = Number.MAX_VALUE; 
    let profit = 0;

    for(let i = 0; i < prices.length; i++) {
        if(buy > prices[i]) {
            buy = prices[i]; 
        }
        if(prices[i] - buy > profit) {
            profit = prices[i] - buy;
        }
    }
    return profit;
}

console.log(maxProfit([7, 6, 4, 3, 1])); // 0

// Time Complexity:  O(n)
// Space Complexity: O(1)