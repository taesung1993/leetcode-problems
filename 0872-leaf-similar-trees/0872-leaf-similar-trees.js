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
        if(!node) {
            return output;
        }

        if(!node.left && !node.right) {
            output.push(node.val);
            return output;
        }

        if(node.left) {
            dfs(node.left, output);
        }

        if(node.right) {
            dfs(node.right, output);
        }

        return output;
    }

    const output1 = dfs(root1, []);
    const output2 = dfs(root2, []);

    const answer = JSON.stringify(output1) === JSON.stringify(output2);

    return answer;
};