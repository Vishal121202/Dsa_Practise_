class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        start = 0
        end = 1
        lastProfit = 0

        while end < len(prices):
            if prices[start] < prices[end]:
                profit = prices[end] - prices[start]
                lastProfit = max(lastProfit, profit)
            else:
                start = end

            end += 1

        return lastProfit