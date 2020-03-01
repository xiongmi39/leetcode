from py.linklist import ListNode


class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        pre = self.swapPairs(head.next.next)
        head.next.next = head
        tmp = head.next
        head.next = pre
        return tmp

    def main(self):
        print('this message is from main function')