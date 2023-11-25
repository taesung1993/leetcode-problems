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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function(root, targetSum) {
    let count = 0;
    const memory = {};

    const dfs = (node, pathSum) => {
        if(!node) {
            return;
        }

        pathSum += node.val;

        if(pathSum === targetSum) {
            count++;
        }

        if(memory[pathSum - targetSum]) {
            count += memory[pathSum - targetSum];
        }

        if(memory[pathSum]) {
            memory[pathSum]++;
        } else {
            memory[pathSum] = 1;
        }

        dfs(node.left, pathSum);
        dfs(node.right, pathSum);

        memory[pathSum]--;
    }


    dfs(root, 0);

    return count;
};