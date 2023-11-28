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
    const dfs = (node, depth, list) => {
        if(!node) {
            return list;
        }

        if(list[depth]) {
            list[depth].push(node.val);
        } else {
            list[depth] = [node.val];
        }

        if(!node.left && !node.right) {
            return list;
        }

        dfs(node.left, depth + 1, list);
        dfs(node.right, depth + 1, list);

        return list;
    }

    const list = dfs(root, 0, []);
    const output = list.length > 0 ? list.map((el) => el.slice(-1)[0]) : [];

    return output;
};