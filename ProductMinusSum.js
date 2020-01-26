//Leetcode Question #1281:https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let productNum = n;
    while(productNum > 0) {
        product *= productNum % 10;
        productNum = Math.floor(productNum / 10);
    }
    let sum = 0;
    let sumNum = n;
    while(sumNum > 0) {
        sum += sumNum % 10;
        sumNum = Math.floor(sumNum / 10);
    }
    return product - sum;
};

console.log(subtractProductAndSum(234));