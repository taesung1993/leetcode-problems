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
 * @return {number}
 */
const maxDepth = function(root) {
    const getDepth = (node, depth) => {
        if(node === null) {
            return depth;
        }
        
        return Math.max(getDepth(node.left, depth + 1), getDepth(node.right, depth + 1));
    }

    return getDepth(root, 0);
};