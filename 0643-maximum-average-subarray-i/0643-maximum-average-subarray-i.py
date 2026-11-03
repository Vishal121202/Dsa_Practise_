class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        currentSum = 0

        for i in range(k):
            currentSum += nums[i]

        maxSum = currentSum

        for second in range(k, len(nums)):
            currentSum = currentSum + nums[second] - nums[second-k]

            maxSum = max(maxSum, currentSum)

        return maxSum / k