/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
    const dfs = (node, output) => {
        if(!node) return;

        if(!node.left && !node.right) {
            output.push(node.val);
            return;
        }

        if(node.left) dfs(node.left, output);

        if(node.right) dfs(node.right, output);
    }

    const output1 = [];
    const output2 = [];

    dfs(root1, output1);
    dfs(root2, output2);

    return output1.length === output2.length && output1.every((val, index) => val === output2[index]);
};