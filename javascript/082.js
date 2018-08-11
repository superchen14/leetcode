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
  let result = null;
  let resultTail = null;
  while(head) {
    const currentValue = head.val;
    if (head.next && head.next.val === currentValue) {
      while(head && head.val === currentValue) {
        head = head.next;
      }
    } else {
      if (resultTail === null) {
        result = head;
        resultTail = head;
      } else {
        resultTail.next = head;
        resultTail = head;
      }
      head = head.next;
    }
  }
  resultTail && (resultTail.next = null);

  return result;
};;