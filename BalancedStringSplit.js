// Leetcode Question #1221:https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let countR = 0; // Count how many "R"
    let countL = 0; // Count how many "L"
    let countTotal = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "R") {
            countR++;
        } else if(s[i] == "L") {
            countL++; 
        }
        if(countR == countL) { // If # of R matches L, we have a balanced string
            countTotal++; // Increment total
            countR = 0; // Reset R and L to 0 AKA split 
            countL = 0;
        }
    }
    return countTotal;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
/* Output: 4 since strings can be split into
   "RL", "RRLL", "RL", "RL" 
*/