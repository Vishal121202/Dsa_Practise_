/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
let sum = [];
  for(let i in nums){
    if(sum[i-1]){
      sum.push(sum[i-1]+nums[i])
    }else{
      sum.push(nums[i])
    }
  }
  return sum
};