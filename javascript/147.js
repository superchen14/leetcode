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
var insertionSortList = function(head) {
  let result = new ListNode(-1000000);
  while(head) {
    let node = head;
    head = head.next;
    node.next = null;

    // insert node into result
    let temp = result;
    while (temp.val < node.val && temp.next !== null && temp.next.val < node.val) {
      temp = temp.next;
    }

    if (temp.next === null) {
      temp.next = node;
    } else {
      node.next = temp.next;
      temp.next = node;
    }
  }

  return result.next;
};