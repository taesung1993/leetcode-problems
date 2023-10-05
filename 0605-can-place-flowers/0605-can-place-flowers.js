/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    flowerbed.forEach((_, index) => {
        const prev = index - 1;
        const next = index + 1;

        if(!flowerbed[prev] && !flowerbed[index] && !flowerbed[next]) {
            count += 1;
            flowerbed[index] = 1;
        }
    });

    return count >= n;
};