/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const val1 = l1.val;
  const val2 = l2.val;
  let head = null;
  if (val1 < val2) {
    head = l1;
    head.next = mergeTwoLists(l1.next, l2);
  } else {
    head = l2;
    head.next = mergeTwoLists(l1, l2.next);
  }

  return head;
};