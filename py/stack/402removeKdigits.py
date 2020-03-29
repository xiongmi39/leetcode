class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        count = k
        for n in num:
            while count>0 and len(stack)>0 and n < stack[-1]:
                stack.pop()
                count -=1
            stack.append(n)
        while count>0 and len(stack)>0:
            stack.pop()
            count -=1
        # while len(stack)>0 and stack[0]=='0':
        #     del stack[0]
        # if len(stack)==0:
        #     return '0'
        return ''.join(stack).lstrip('0') or '0'

solution = Solution()
ans = solution.removeKdigits("10200",1)
print(ans)