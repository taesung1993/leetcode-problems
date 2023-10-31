/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
    const map = new Map();

    for(let i=0; i<arr.length; i++) {
        const num = arr[i];
        map.set(num, map.get(num) + 1 || 1);
    }

    const values = Array.from(map.values());
    const answer = values.length === new Set(values).size;

    return answer;
};