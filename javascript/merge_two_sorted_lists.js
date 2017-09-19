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
  var result = null;
  var currentNodeOnResult = null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  while(l1 !== null && l2 !== null)
  {
    var newValue = l1.val > l2.val ? l2.val : l1.val;
    if (result == null) {
      result = new ListNode(newValue);
      currentNodeOnResult = result;
    } else {
      var tempNode = new ListNode(newValue);
      currentNodeOnResult.next = tempNode;
      currentNodeOnResult = tempNode;
    }

    if (l1.val > l2.val) {
      l2 = l2.next;
    } else {
      l1 = l1.next;
    }
  }

  if (l1 === null) currentNodeOnResult.next = l2;
  if (l2 === null) currentNodeOnResult.next = l1;

  return result;
};