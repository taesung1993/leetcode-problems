/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    const arr = s.split('');
    const vowels = new Map([['a', 'a'], ['e', 'e'], ['i', 'i'], ['o', 'o'], ['u', 'u']]);

    let start = 0;
    let end = s.length - 1;

    while(start <= end) {
        const vowelByStart = s[start].toLowerCase();
        const vowelByEnd = s[end].toLowerCase();

        if(!vowels.has(vowelByStart)) {
            start++;
        }

        if(!vowels.has(vowelByEnd)) {
            end--;
        }

        if(vowels.has(vowelByStart) && vowels.has(vowelByEnd)) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    return arr.join('');
};