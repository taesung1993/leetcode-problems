/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
    let leftSum = 0;
    let totalSum = nums.reduce((r,c) => r + c);

    for(let i=0; i<nums.length; i++) {
        totalSum -= nums[i];

        if(leftSum === totalSum) {
            return i;
        }

        leftSum += nums[i]; 
    }

    return -1;
};