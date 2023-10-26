/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
    if(arr.length === 1) {
        return true;
    }

    const hash = new Map();

    for(let i=0; i<arr.length; i++) {
        const num = arr[i];

        if(hash.has(num)) {
            hash.set(num, hash.get(num) + 1);
        } else {
            hash.set(num, 1);
        }
    }

    const values = Array.from(hash.values());

    return values.length === Array.from(new Set(values)).length;
};