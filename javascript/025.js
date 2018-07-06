/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k === 1) return head;

  _reverseKGroup = (head, k) => {
    let temp = k;
    let values = [];
    let tempNode = head;
    while(temp > 0 && tempNode != null) {
      values.unshift(tempNode.val);
      tempNode = tempNode.next;
      --temp;
    }

    if (values.length !== k) return;

    tempNode = head;
    values.forEach(value => {
      tempNode.val = value;
      tempNode = tempNode.next;
    });

    _reverseKGroup(tempNode, k);
  }

  _reverseKGroup(head, k);
  return head;
};