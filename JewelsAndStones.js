// Leetcode Question #771: https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let counter = 0;
    for (let i = 0; i < J.length; i++) { // J is stones that are jewels
        for (let j = 0; j < S.length; j++) { // S is stones we have
            if(S[j] == J[i]) { // If our stones match with J, then we have a jewel
                counter++; // Keep track of how many jewels we have in S
            }
        }
    }
    return counter;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));