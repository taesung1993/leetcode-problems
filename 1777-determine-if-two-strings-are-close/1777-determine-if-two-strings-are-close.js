/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function(word1, word2) {
    const hash1 = new Map();
    const hash2 = new Map();

    for(let i=0; i<word1.length; i++) {
        const word = word1[i];
        hash1.set(word, hash1.get(word) + 1 || 1);
    }   

    for(let i=0; i<word2.length; i++) {
        const word = word2[i];
        hash2.set(word, hash2.get(word) + 1 || 1);
    }

    const keys1 = Array.from(hash1.keys()).sort((a,b) => a > b ? 1 : a < b ? -1 : 0);
    const keys2 = Array.from(hash2.keys()).sort((a,b) => a > b ? 1 : a < b ?  -1 : 0);
    const value1 = Array.from(hash1.values()).sort((a,b) => a-b);
    const value2 = Array.from(hash2.values()).sort((a,b) => a-b);

    const operation1Condition = JSON.stringify(keys1) === JSON.stringify(keys2);
    const operation2Condition = JSON.stringify(value1) === JSON.stringify(value2);

    return operation1Condition && operation2Condition
};