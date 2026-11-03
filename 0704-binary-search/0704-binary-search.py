import math
class Solution:
    def search(self, nums: list[int], target: int) -> int:
      left = 0
      right = len(nums) - 1
      index = 0
      while left <= right :
        index = math.floor((right + left )/2)
        if nums[index] == target:
          return index
        elif nums[index] < target:
          left = index + 1
        elif nums[index] > target:
          right =  index -1
      return -1
