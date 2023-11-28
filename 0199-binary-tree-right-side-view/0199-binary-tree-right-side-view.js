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
 * @return {number[]}
 */
const rightSideView = function(root) {
    const queue = root ? [root] : [];
    const result = [];

    while(queue.length > 0) {
        const queueSize = queue.length;

        for(let i=0; i<queueSize; i++) {
            const node = queue.shift();

            if(i === queueSize - 1) {
                result.push(node.val);
            }

            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
            }
        }
    }

    return result;
};