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

    let node = head;

    let primaryRoot = null;
    let primary = primaryRoot;
    
    let secondaryRoot = null;
    let secondary = secondaryRoot;

    let index = 0;

    while(node) {
        if(index % 2 === 0) {
            if(primary) {
                primary.next = new ListNode(node.val);
                primary = primary.next;
            } else {
                primaryRoot = new ListNode(node.val);
                primary = primaryRoot;
            }
        } else {
            if(secondary) {
                secondary.next = new ListNode(node.val);
                secondary = secondary.next;
            } else {
                secondaryRoot = new ListNode(node.val);
                secondary = secondaryRoot;
            }
        }
        node = node.next;
        index++;
    }

    primary.next = secondaryRoot;

    return primaryRoot;
};