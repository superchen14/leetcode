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
var rotateRight = function(head, k) {
  if (k === 0) return head;
  let temp = head;
  let length = 0;
  let list = [];
  while(temp) {
    list.push(temp);
    temp = temp.next;
    ++length;
  }
  let lastNode = list[length - 1];

  if (length === 0) return head;
  while(k > length) {
    k = k - length;
  }
  if (k === length) return head;

  let left = length - k - 1;
  let leftNode = list[left];
  let leftNextNode = list[left + 1];
  lastNode.next = head;
  leftNode.next = null;
  return leftNextNode;
};