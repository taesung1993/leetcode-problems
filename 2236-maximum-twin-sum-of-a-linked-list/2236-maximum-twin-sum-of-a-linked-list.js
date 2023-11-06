/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function(head) {
    const list = [];
    let node = head;
    let size = 0;
    let max = 0;
    
    while(node) {
        list.push(node.val);
        node = node.next;
        size++;
    }

    const limit = Math.floor(size / 2);

    for(let i=0; i<limit; i++) {
        max = Math.max(max, list[i] + list[size - i - 1]);
    }

    return max;
}