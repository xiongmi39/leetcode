class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        def getStr(sss: str):
            stack = []
            for s in sss:
                if s == '#':
                    if len(stack) > 0:
                        stack.pop()
                else:
                    stack.append(s)
            return ''.join(stack)

        return getStr(S) == getStr(T)

solution = Solution()
ans = solution.backspaceCompare("y#fo##f","y#f#o##f")
print(ans)