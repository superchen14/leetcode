/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  var mergedArray = [];
  for (var i = 0; i < lists.length; ++i) {
    var list = lists[i];
    while(list) {
      mergedArray.push(list.val);
      list = list.next;
    }
  }

  mergedArray.sort(function(a, b){ return a - b; });
  var mergedList = null;
  var current = null;
  mergedArray.forEach(function(value){
    if (mergedList === null) {
      mergedList = new ListNode(value);
      current = mergedList;
    } else {
      var newNode = new ListNode(value);
      current.next = newNode;
      current = newNode;
    }
  })

  return mergedList;
};