import operator
from typing import List


class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        SIGN = {'+':operator.add,'-':operator.sub,'*':operator.mul,'/':operator.truediv}
        stack = []
        for tok in tokens:
            if tok not in SIGN:
                stack.append(tok)
            else:
                b = stack.pop()
                a = stack.pop()
                stack.append(int(SIGN[tok](int(a),int(b))))
        return int(stack[0])

solution = Solution()
ans = solution.evalRPN(["2","1","+","3","*"])
print(ans)