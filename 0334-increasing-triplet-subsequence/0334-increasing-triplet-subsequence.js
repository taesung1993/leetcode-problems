/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function(nums) {
    const dp = [nums[0]];

    for(let i=1; i<nums.length; i++) {
        const num = nums[i];
        let isInserted = false;

        for(let j=0; j<dp.length; j++) {
            if(num <= dp[j]) {
                dp[j] = num;
                isInserted = true;
                break;
            }
        }

        if(!isInserted) {
            dp.push(num);
        }

        if(dp.length === 3) {
            return true;
        }
    }

    return false;
};