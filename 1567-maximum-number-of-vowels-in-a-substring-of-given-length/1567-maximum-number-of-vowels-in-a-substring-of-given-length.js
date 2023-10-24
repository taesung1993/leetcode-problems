/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function(s, k) {
    const isVowel = (char) => {
        switch(char) {
            case 'a':
            case 'e':
            case 'o':
            case 'i':
            case 'u':
                return true;
            default:
                return false;
        }
    }

    let count = 0;
    let max = 0;

    for(let i=0; i<s.length; i++) {
        if(i >= k) {
            count -= isVowel(s[i-k]);
        }

        count += isVowel(s[i]);
        max = Math.max(count, max);
    }

    return max;
};