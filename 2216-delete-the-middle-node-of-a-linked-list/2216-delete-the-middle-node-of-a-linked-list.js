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
    const map = new Map();
    let length = 0;
    let node = head;

    while(node !== null) {
        map.set(length, node);
        node = node.next;
        length++;
    }

    if(length === 1) {
        return null;
    }

    const mid = Math.floor(length / 2) - 1;

    node = map.get(mid);
    node.next = node?.next?.next;

    return head;
};