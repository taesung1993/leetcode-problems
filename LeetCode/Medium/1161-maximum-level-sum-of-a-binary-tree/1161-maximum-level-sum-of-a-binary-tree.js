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
const maxLevelSum = function(root) {
    const queue = root ? [root] : [];
    let level = 0;
    const sums = [];
    
    while(queue.length > 0) {
        const size = queue.length;
        
        for(let i=0; i<size; i++) {
            const node = queue.shift();
            
            sums[level] = (sums[level] ?? 0) + node.val;
            
            
            if(node.left) {
                queue.push(node.left);
            }
            
            if(node.right) {
                queue.push(node.right);
            }
        }
        
        level++;
    }
    
    const max = Math.max(...sums);
    const answer = sums.findIndex((sum) => sum === max);
    
    return answer + 1;
};