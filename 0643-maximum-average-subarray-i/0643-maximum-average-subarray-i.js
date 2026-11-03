var findMaxAverage = function(nums, k) {
let key =0
  let sum=0
  for(let i =0;i< k;i++){
    sum += nums[i]
  }
  key = sum
  let first = 0
  console.log(key,k,nums.length)
  let second = k
  while(k< nums.length){
    sum = sum - nums[first] + nums[k]
    if(key<sum){
      key = sum
    }
      k++
      first++
  }
  return key/second
};