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
var addTwoNumbers = function(l1, l2) {
  let nodeOnl1 = l1;
  let nodeOnl2 = l2;

  let resultList = null;
  let resultListTail = null;
  let overflow = 0;

  while(nodeOnl1 || nodeOnl2) {
    let val1 = nodeOnl1 ? nodeOnl1.val : 0;
    let val2 = nodeOnl2 ? nodeOnl2.val : 0;
    let sum = val1 + val2 + overflow;
    overflow = sum >= 10 ? 1 : 0;
    const remain = sum % 10;

    let newNode = new ListNode(remain);
    if (resultList === null) {
      resultList = newNode;
      resultListTail = newNode;
    } else {
      resultListTail.next = newNode;
      resultListTail = newNode;
    }

    nodeOnl1 && (nodeOnl1 = nodeOnl1.next);
    nodeOnl2 && (nodeOnl2 = nodeOnl2.next);
  }

  if (overflow === 1) { resultListTail.next = new ListNode(1); }

  return resultList;
};