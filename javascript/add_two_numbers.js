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
  var nodeOnl1 = l1;
  var nodeOnl2 = l2;

  var resultList = null;
  var nodeOnResultList = null;
  var overflow = 0;

  while(nodeOnl1 || nodeOnl2) {
    var val1 = nodeOnl1 ? nodeOnl1.val : 0;
    var val2 = nodeOnl2 ? nodeOnl2.val : 0;
    var sum = val1 + val2 + overflow;
    overflow = sum >= 10 ? 1 : 0;
    var remain = sum % 10;

    var newNode = new ListNode(remain);
    if (resultList === null) {
      resultList = newNode;
      nodeOnResultList = newNode;
    } else {
      nodeOnResultList.next = newNode;
      nodeOnResultList = newNode;
    }

    nodeOnl1 && (nodeOnl1 = nodeOnl1.next);
    nodeOnl2 && (nodeOnl2 = nodeOnl2.next);
  }

  if (overflow === 1) {
    nodeOnResultList.next = new ListNode(1);
  }

  return resultList;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}