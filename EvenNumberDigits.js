// Leetcode question #1295: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenNum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i].toString().length % 2 == 0) {
            evenNum += 1;
        }
    }
    return evenNum;
};

console.log(findNumbers([12,345,2,6,7896]))