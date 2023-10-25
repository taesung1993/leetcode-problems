/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
    let totalSum = nums.reduce((r, c) => r + c, 0);
    let leftSum = 0;

    for(let i=0; i<nums.length; i++) {
        totalSum -= nums[i];

        if(leftSum === totalSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};