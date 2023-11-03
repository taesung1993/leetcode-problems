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
    let node = head;
    let size = 0;
    const values = [];

    while(node) {
        values.push(node.val);
        node = node.next;
        size++;
    }

    const limit = Math.floor(size / 2);
    const length = size - 1;
    let max = 0;

    for(let i=0; i<limit; i++) {
        max = Math.max(max, values[i] + values[length-i]);
    }

    return max;
}