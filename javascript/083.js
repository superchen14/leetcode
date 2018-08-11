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
var deleteDuplicates = function(head) {
  if (head === null) return head;

  let current = head;
  while(true) {
    let next = current.next;
    if (next === null) break;

    if (current.val === next.val) {
      current.next = next.next;
    } else {
      current = next;
    }
  }

  return head;
};