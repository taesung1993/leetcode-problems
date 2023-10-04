/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let answer = '';
    let firstPointer = 0;
    let secondPointer = 0;

    while(firstPointer < word1.length || secondPointer < word2.length) {
        const merged =  (word1[firstPointer++] || '') + (word2[secondPointer++] || '');
        answer += merged;
    }

    return answer;
};