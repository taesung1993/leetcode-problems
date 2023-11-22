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
    if(!root) {
        return 0;
    }

    const dfs = (node, depth) => {
        if(!node) {
            return depth;
        }

        if(!node.left && !node.right) {
            return depth;
        }

        let leftDepth = 0;
        let rightDepth = 0;
        
        if(node.left) {
            leftDepth = dfs(node.left, depth + 1);
        }
        
        if(node.right) {
            rightDepth = dfs(node.right, depth + 1);
        }

        return Math.max(leftDepth, rightDepth);
    }

    const answer = dfs(root, 1);
    return answer;
};