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
  if (head === null) return null;
  if (head.next === null) return head;

  var first = head;
  var second = head.next;
  head = second;
  var lastFirst = null;
  while(true) {
    if (lastFirst) lastFirst.next = second;
    first.next = second.next;
    second.next = first;
    lastFirst = first;
    first = first.next;
    if (first === null) return head;
    second = first.next;
    if (second === null) return head;
  }
};