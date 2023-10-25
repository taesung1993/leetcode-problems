/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
    let sum = 0;
    let max = sum;

    for(let i=0; i<gain.length; i++) {
        sum += gain[i];
        max = Math.max(sum, max);
    }

    return max;
};