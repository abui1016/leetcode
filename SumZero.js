// Leetcode Question # 1304:https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = [n];
    for(let i = 0; i < n; i++) { 
        // First half of array is negative form of second half
        arr[i] = (i * 2) - n + 1; 
    }
    return arr;
};

console.log(sumZero(3));