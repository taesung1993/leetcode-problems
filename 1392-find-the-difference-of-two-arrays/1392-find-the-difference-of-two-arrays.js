/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function(nums1, nums2) {
    const set1 = new Set();
    const set2 = new Set();
    const hash1 = nums1.reduce((r, c) => {
        r.set(c, true);
        return r;
    }, new Map());
    const hash2 = nums2.reduce((r, c) => {
        r.set(c, true);
        return r;
    }, new Map());

    for(let i=0; i<nums1.length; i++) {
        const num = nums1[i];

        if(!hash2.has(num)) {
            set1.add(num);
        }
    }

    for(let i=0; i<nums2.length; i++) {
        const num = nums2[i];

        if(!hash1.has(num)) {
            set2.add(num);
        }
    }

    return [Array.from(set1), Array.from(set2)];
};