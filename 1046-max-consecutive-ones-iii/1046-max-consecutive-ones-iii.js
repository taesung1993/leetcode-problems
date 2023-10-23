/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function(nums, k) {
    let start = 0;
    let end = 0;
    let zeroCount = 0;
    let max = 0;

    while(end < nums.length) {
        if(nums[end] === 0) {
            zeroCount++;
        }

        while(zeroCount > k) {
            if(nums[start] === 0) {
                zeroCount--;
            }

            start++;
        }

        max = Math.max(max, end - start + 1);
        end++;
    }

    return max;
};