/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
let map  = {};

for (let i of nums){
    if(map[i]){
        map[i] = map[i] + 1
    }else{
map[i] = 1
    }
}
let sortedArray = Object.entries(map).sort((a,b) => b[1] -a[1])

return sortedArray.slice(0,k).map(([key,value]) => parseInt(key))
};
