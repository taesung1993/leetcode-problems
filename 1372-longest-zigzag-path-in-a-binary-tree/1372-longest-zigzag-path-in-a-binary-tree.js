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
const longestZigZag = function(root) {
    let max = 0;

    const dfs = (node, direction, steps) => {
        if(!node) {
            return;
        }

        max = Math.max(max, steps);


        if(direction === 'left') {
            dfs(node.right, 'left', 1);
            dfs(node.left, 'right', steps + 1);
        } else {
            dfs(node.left, 'right', 1); 
            dfs(node.right, 'left', steps + 1);
        }
    }

    dfs(root, 'left', 0);
    dfs(root, 'right', 0);

    return max;
};
