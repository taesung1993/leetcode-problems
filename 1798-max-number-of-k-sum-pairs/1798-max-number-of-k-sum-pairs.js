/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function(nums, k) {
    let operation = 0;
    let left = 0;
    let right = nums.length - 1;

    nums.sort((a, b) => a - b);

    while(left < right) {
        const sum = nums[left] + nums[right];

        if(sum === k) {
            left++;
            right--;
            operation++;
        } else if(sum > k) {
            right--;
        } else if(sum < k) {
            left++;
        }
    }

    return operation;
};