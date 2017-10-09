/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var current = head;
  var length = 0;
  while(current !== null) {
    ++length;
    current = current.next;
  }

  var target = length - n;
  if (target < 0) return head;
  var dummy = new ListNode(0);
  dummy.next = head;
  var targetNode = dummy;
  while(target > 0) {
    targetNode = targetNode.next;
    --target;
  }
  targetNode.next = targetNode.next.next;
  
  return dummy.next;
};