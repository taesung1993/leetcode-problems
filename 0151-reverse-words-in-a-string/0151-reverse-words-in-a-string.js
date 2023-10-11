/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const memory = [];
    let pointer = s.length - 1;

    while(pointer >= 0) {
        let word = '';
        while(s[pointer] && s[pointer] !== ' ') {
            word = s[pointer] + word;
            pointer--;
        }
        
        if(word !== '') {
            memory.push(word);
        }
        pointer--;
    }

    return memory.join(' ');
};