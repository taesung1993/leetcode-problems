/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    const dfs = (node, p, q) => {
        if(!node || node.val === p || node.val === q) {
            return node;
        }

        const leftLCA = dfs(node.left, p, q);
        const rightLCA = dfs(node.right, p, q);

        if(leftLCA && rightLCA) {
            return node;
        }

        return leftLCA ? leftLCA : rightLCA;
    }

    const result = dfs(root, p.val, q.val);
    return result;
};