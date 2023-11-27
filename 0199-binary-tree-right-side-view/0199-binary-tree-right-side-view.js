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
    const dfs = (node, depth, map) => {
        if(!node) {
            return map;
        }

        if(map.has(depth)) {
            map.set(depth, [...map.get(depth), node.val]);
        } else {
            map.set(depth, [node.val]);
        }

        if(!node.left && !node.right) {
            return map;
        }

        dfs(node.left, depth + 1, map);
        dfs(node.right, depth + 1, map);

        return map;
    }

    const map = dfs(root, 0, new Map());
    const values =  Array.from(map.values());
    const answer = values.length > 0 ? values.map((el) => el.slice(-1)[0]) : [];
    return answer;
};