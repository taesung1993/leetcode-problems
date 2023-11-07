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
const deleteMiddle = function(head) {
    if(head.next === null) {
        return null;
    }

    let first = head;
    let second = head.next;

    while(second && second.next && second.next.next) {
        first = first.next;
        second = second.next.next;
    }

    first.next = first.next.next;

    return head;
};