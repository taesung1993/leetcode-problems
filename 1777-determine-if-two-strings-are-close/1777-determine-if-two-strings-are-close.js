/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function(word1, word2) {
    const hash1 = word1.split('').reduce((m, c) => {
        m.set(c, m.get(c) + 1 || 1);
        return m;
    }, new Map());
    const hash2 = word2.split('').reduce((m, c) => {
        m.set(c, m.get(c) + 1 || 1);
        return m;
    }, new Map());

    const keys1 = Array.from(hash1.keys()).sort((a,b) => a>b ? 1 : a<b ? -1 : 0);
    const keys2 = Array.from(hash2.keys()).sort((a,b) => a>b ? 1 : a<b ? -1 : 0);
    const values1 = Array.from(hash1.values()).sort((a,b) => a-b);
    const values2 = Array.from(hash2.values()).sort((a,b) => a-b);
    const checkOperation1Condition = JSON.stringify(keys1) === JSON.stringify(keys2);
    const checkOperation2Condition = JSON.stringify(values1) === JSON.stringify(values2);

    return checkOperation1Condition && checkOperation2Condition;
};