/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let current = head;
  while(true) {
    const first = current;
    if (first === null) return head;
    const second = current.next;
    if (second === null) return head;
    const temp = first.val;
    first.val = second.val;
    second.val = temp;

    current = current.next.next;
  }
  return head;
};