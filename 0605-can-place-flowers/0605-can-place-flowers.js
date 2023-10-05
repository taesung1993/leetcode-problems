/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length === 1 && flowerbed[0] === 0) {
        return true;
    }

    const lastIndex = flowerbed.length - 1;
    let count = 0;

    for(let i=0; i<flowerbed.length; i++) {
        if(i === 0) {
            if(flowerbed[0] === 0 && flowerbed[1] === 0) {
                flowerbed[0] = 1;
                count += 1;
            }
        }

        if(i === lastIndex) {
            if(flowerbed[i-1] === 0 && flowerbed[i] === 0) {
                flowerbed[i] = 1;
                count += 1;
            }
        }

        if(flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1;
            count += 1;
        }

        if(count >= n) {
            return true;
        }
    }

    return false;
};