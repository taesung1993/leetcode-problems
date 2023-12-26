
const SmallestInfiniteSet = function() {
    this.infiniteSet = new Array(1001).fill(true);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() { 
    for(let i=1; i<this.infiniteSet.length; i++) {
        if(this.infiniteSet[i]) {
            this.infiniteSet[i] = false;
            return i;
        }
    }

    return null;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.infiniteSet[num] = true;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */