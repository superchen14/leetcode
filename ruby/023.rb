# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode[]} lists
# @return {ListNode}
def merge_k_lists(lists)
  array = []
  lists.each do |list|
    while !list.nil? do
      array.push(list.val)
      list = list.next
    end
  end
  array.sort!
  dummy = ListNode.new(0)
  head = dummy
  array.each do |val|
    head.next = ListNode.new(val)
    head = head.next
  end
  dummy.next
end