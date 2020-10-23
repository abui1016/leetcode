// Leetcode Question #125: https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string}
 * @return {boolean}
 */

 var isPalindrome = function(s) {
     s = s.toLowerCase().replace(/[^0-9a-z]/gi,'');
     let i = 0; 
     let j = s.length - 1;

     while(i < j) {
         if(s[i] !== s[j]) {
             return false;
         } else {
             i++;
             j--;
         }
     }
     return true;
 };

 console.log(isPalindrome("A man, a plan, a canal: Panama"));
 // Time Complexity:  O(n)
 // Space Complexity: O(1)