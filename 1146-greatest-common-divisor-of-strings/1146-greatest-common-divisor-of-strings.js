/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {   
    function getGCD(a, b) {
      if(a % b === 0) {
        return b;
      }

      return getGCD(b, a % b);
    }

    if(str1 + str2 !== str2 + str1) {
      return '';
    }

    const length = getGCD(str1.length, str2.length);
    return str1.slice(0, length);
};