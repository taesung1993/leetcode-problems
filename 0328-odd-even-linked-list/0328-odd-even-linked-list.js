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
const oddEvenList = function(head) {
    if(head === null) {
        return null;
    }

    let odd = head;
    let even = head.next;
    let oddHead = odd;
    let evenHead = even;

    while(even && even.next) {
        odd.next = odd.next.next;
        odd = odd.next;

        even.next = even.next.next;
        even = even.next;
    }

    odd.next = evenHead;

    return oddHead;
};