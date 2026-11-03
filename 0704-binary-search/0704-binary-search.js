/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let index;

    while (left <= right) {
        console.log(left, right);

        index = Math.floor((right + left) / 2);

        if (nums[index] == target) {
            return index;

        } else if (nums[index] < target) {
            left = index + 1;

        } else if (nums[index] > target) {
            right = index - 1;
        }
    }

    return -1;
};