/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let start = 0
let end = nums.length-1
let newNum = new Array(nums.length)
let index = nums.length-1
while(start <= end){
    let startNum = nums[start] * nums[start]
    let endNum = nums[end] * nums[end]
    if(startNum < endNum){
        newNum[index] = endNum
end --
    }else{
       newNum[index] = startNum
       start++ 
    }
    index--
}
return newNum
};