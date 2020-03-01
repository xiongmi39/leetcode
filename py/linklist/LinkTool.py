from py.linklist import ListNode


class Solution:
    def arrToLinkList(self, arr:list,linkList:ListNode):
        if len(arr) == 0:
            return None
        listnode = ListNode(arr.pop(0))
        listnode.next = self.arrToLinkList(arr, listnode)
        return listnode
