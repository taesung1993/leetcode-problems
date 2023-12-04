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
const searchBST = function(root, val) {
    const queue = root ? [root] : [];

    while(queue.length) {
        const size = queue.length;

        for(let i=0; i<size; i++) {
            const node = queue.shift();

            if(node.val === val) {
                return node;
            }

            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right)
            } 
        }
    }

    return null;
};