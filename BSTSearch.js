// Leetcode Question #700: https://leetcode.com/problems/search-in-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(root.val === val) {
        return root;
    } else if(val < root.val && root.left !== null) { // Go left
        return searchBST(root.left, val);
    } else if(val > root.val && root.right !== null) { // Go right
        return searchBST(root.right, val);
    } else {
        return null;
    }
};