// Leetcode Question #905: https://leetcode.com/problems/sort-array-by-parity/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let newArr = [];
    for(let i = 0; i < A.length; i++) {
        if(A[i] % 2 == 0) { // Check if even number
            newArr.unshift(A[i]); // Add to front if even
        } else {
            newArr.push(A[i]); // Add to back if odd
        }
    }
    return newArr;
};