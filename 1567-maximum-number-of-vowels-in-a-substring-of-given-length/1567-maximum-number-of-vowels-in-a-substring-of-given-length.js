const isVowel = (char) => {
    switch(char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function(s, k) {
    let max = 0;
    let count = 0;

    for(let i=0; i<s.length; i++) {
        if(i >= k) {
            count -= isVowel(s[i-k]);
        }

        count += isVowel(s[i]);
        max = Math.max(max, count);
    }

    return max;   
};