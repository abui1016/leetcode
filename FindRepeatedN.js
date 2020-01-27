// Leetcode Question # 961:https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let count = 0;
    for(let i = 0; i < A.length; i++) {
        count = 0;
        for(let j = 0; j < A.length; j++) { // Check for repeated values
            if(A[i] == A[j]) {
                count++;
                if(count == (A.length) / 2) {
                    return A[i];
                }
            }
        }
    }
    return A[i];
};

console.log(repeatedNTimes([2,1,2,5,3,2]));