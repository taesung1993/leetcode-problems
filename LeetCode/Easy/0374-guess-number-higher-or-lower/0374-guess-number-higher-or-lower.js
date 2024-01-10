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
    
    while(true) {
        const pivot = Math.floor((left + right) / 2);
        const guessValue = guess(pivot);
        
        if(guessValue === 0) {
            return pivot;
        } 
        
        if(guessValue === 1) {
            left = pivot + 1;
        }
        
        if(guessValue === -1) {
            right = pivot - 1;
        }
    }
};