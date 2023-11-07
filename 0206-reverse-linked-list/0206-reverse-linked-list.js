/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    let node = head;
    let prev = null;
    let current = null;

    while(node) {
        current = new ListNode(node.val);
        current.next = prev;
        node = node.next;
        prev = current;
    }

    return current;
};