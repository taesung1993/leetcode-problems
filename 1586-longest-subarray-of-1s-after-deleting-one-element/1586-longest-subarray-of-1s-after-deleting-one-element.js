/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
    let start = 0;
    let end = 0;
    let zeroCount = 0;
    let max = 0;

    while(end < nums.length) {
        if(nums[end] === 0) {
            zeroCount++;
        }

        while(zeroCount === 2) {
            if(nums[start] === 0) {
                zeroCount--;
            }
            start++;
        }

        max = Math.max(max, end - start);
        end++;
    }

    return max;
};