/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let partition1Head = null;
  let partition1 = null;
  let partition2Head = null;
  let partition2 = null;

  let current = head;
  while(current) {
    if (current.val < x) {
      if (partition1 === null) {
        partition1 = current;
        partition1Head = current;
      } else {
        partition1.next = current;
        partition1 = current;
      }
    } else {
      if (partition2 === null) {
        partition2 = current;
        partition2Head = current;
      } else {
        partition2.next = current;
        partition2 = current;
      }
    }

    current = current.next;
  }
  if (partition1 !== null) { partition1.next = partition2Head; }
  if (partition2 !== null) { partition2.next = null; }

  if (partition1Head !== null) return partition1Head;

  return partition2Head;
};