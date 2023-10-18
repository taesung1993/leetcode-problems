/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let pointer = 0;

    for(let i=0; i<t.length; i++) {
        const char = t[i];

        if(s[pointer] === char) {
            pointer++;
        }
    }

    return pointer === s.length;
};