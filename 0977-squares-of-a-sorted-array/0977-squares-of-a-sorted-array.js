/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let newNum = nums.map(ele => ele*ele)
console.log(newNum,newNum.sort())
return newNum.sort((a,b) => a-b)
};