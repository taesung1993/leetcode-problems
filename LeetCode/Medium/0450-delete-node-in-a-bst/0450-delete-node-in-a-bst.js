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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function(root, key) {
    if(!root) {
        return null;
    }

    if(key < root.val) {
        root.left = deleteNode(root.left, key);
        return root;
    }

    if(key > root.val) {
        root.right = deleteNode(root.right, key);
        return root;
    }

    if(!root.left) {
        return root.right; 
    }

    if(!root.right) {
        return root.left;
    }

    const node = findNode(root.right);
    node.left = root.left;
    return root.right;
};

function findNode(node) {
    while(node.left !== null) {
        node = node.left;
    }
    return node;
}