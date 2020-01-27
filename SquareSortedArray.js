// Leetcode Question #977: https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let squareArr = [];
    for(let i = 0; i < A.length; i++) { // Take squares then sort
        squareArr[i] = A[i] * A[i];
    }
    ins_sort(squareArr);
    return squareArr;
};

// Insertion sort

var swap = function(squareArr, src, dest) {
    let temp = squareArr[src];
    squareArr[src] = squareArr[dest];
    squareArr[dest] = temp;
}

var ins_sort = function(squareArr) {
    for(let i = 1; i < squareArr.length; i++) {
        let j = i;
        while(j > 0 && squareArr[j-1] > squareArr[j]) {
            swap(squareArr, j-1, j);
            j--;
        }
    }
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));