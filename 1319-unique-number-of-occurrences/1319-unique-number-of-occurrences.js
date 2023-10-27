/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
    const hash = new Map();

    for(let i=0; i<arr.length; i++) {
        const num = arr[i];
        hash.set(num, hash.get(num) + 1 || 1);
    }

    const values = Array.from(hash.values());
    const set = new Set(values);
    
    return values.length === set.size;
};