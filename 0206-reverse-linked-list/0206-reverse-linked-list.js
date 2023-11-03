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
    let prevNode = null;
    let currentNode = null;

    while(node) {
        currentNode = new ListNode(node.val);
        currentNode.next = prevNode;
        prevNode = currentNode;
        node = node.next;
    } 

    return currentNode;
};