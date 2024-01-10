/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
    let left = 1;
    let right = n;
    let pivot = 0;
    
    
    while(true) {
        pivot = left + Math.floor((right - left) / 2);
        const guessValue = guess(pivot);
        
        if(guessValue === 0) {
            break;
        }
        
        if(guessValue === 1) {
            left = pivot + 1;
        }
        
        if(guessValue === -1) {
            right = pivot - 1;
        }
    }
    
    return pivot;
};