# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
  fake_node = ListNode.new(0)
  fake_node.next = head

  current_node = fake_node
  n_node = fake_node
  (n + 1).times.each do
    n_node = n_node.next
  end

  while !n_node.nil? do
    current_node = current_node.next
    n_node = n_node.next
  end

  current_node.next = current_node.next.next
  fake_node.next
end