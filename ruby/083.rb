# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
  dummy = ListNode.new("dummy")
  current = dummy
  while !head.nil? do
    if head.next.nil? || head.next.val != head.val
      current.next = ListNode.new(head.val)
      current = current.next
    end
    head = head.next
  end

  dummy.next
end