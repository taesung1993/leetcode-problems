/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while(left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const distance = right - left;

        if(height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }

        max = Math.max(max, minHeight * distance);
    }

    return max;
};