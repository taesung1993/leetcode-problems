/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let zero = 0;

    for(let i=0; i<nums.length; i++) {
        const num = nums[i];

        if(num !== 0) {
            [nums[zero], nums[i]] = [nums[i], nums[zero]];
            zero++;
        }
    }

    return nums;
};