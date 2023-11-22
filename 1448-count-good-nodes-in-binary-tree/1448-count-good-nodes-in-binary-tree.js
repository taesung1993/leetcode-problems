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
const goodNodes = function(root) {
    let count = 0;

    const dfs = (node, upperBound=-Infinity) => {
        if(!node) {
            return;
        }

        if(node.val >= upperBound) {
            count += 1;
        }

        const max = Math.max(node.val, upperBound);
        dfs(node.left, max);
        dfs(node.right, max);
    }

    dfs(root);

    return count;
};