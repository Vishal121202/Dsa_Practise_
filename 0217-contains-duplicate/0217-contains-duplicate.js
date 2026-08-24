/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let element  = {}
 for (let i  of nums){
     if(element[i]){
         return true
     }else{
         element[i] = 1
     }
 }
 return false
};