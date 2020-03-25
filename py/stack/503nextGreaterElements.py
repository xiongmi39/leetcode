from typing import List


class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        db_nums = nums*2
        ans = [-1]*len(nums)
        stack = [0]
        len_db = len(db_nums)-1
        for i in range(len_db,-1,-1):
            while len(stack) >1 and db_nums[i] >= nums[stack[-1]]:
                stack.pop()
            if len(stack) >1:
                top_idx = stack[-1]
                tmp = int(i%len(nums))
                ans[tmp] = nums[top_idx]
            stack.append(i % len(nums))
        return ans



solution = Solution()
ans = solution.nextGreaterElements([3,4,2,1,6,7,-1,-5,10,-9])
print(ans)

