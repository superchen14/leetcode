# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @param {Integer} x
# @return {ListNode}
def partition(head, x)
  values = []
  while !head.nil? do
    values.push(head.val)
    head = head.next
  end

  part1, part2 = values.partition {|value| value < x}

  dummy = ListNode.new("dummy")
  current = dummy
  part1.each do |value|
    current.next = ListNode.new(value)
    current = current.next
  end

  part2.each do |value|
    current.next = ListNode.new(value)
    current = current.next
  end

  dummy.next
end