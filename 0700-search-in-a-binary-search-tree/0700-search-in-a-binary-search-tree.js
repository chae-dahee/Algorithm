/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    //node 못찾으면 null
    let curNode = root;

    while(curNode){
        if(curNode.val === val) return curNode;
        if(curNode.val > val) curNode = curNode.left
        else curNode = curNode.right
    }
    return null
};