/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const result = [];

    for(let i=0; i<candies.length; i++) {
        const sum = candies[i] + extraCandies;
        const value = sum >= max;
        result.push(value);
    }

    return result;
};