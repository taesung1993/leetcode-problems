class Priority_Queue {
    constructor() {
        this.heap = [];
    }

    get length() {
        return this.heap.length;
    }

    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parentNode = this.heap[parentIndex];
            const element = this.heap[index];

            if(parentNode > element) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            }

            index = parentIndex;
        }
    }

    dequeue() {
        const root = this.heap[0];
        const last = this.heap.pop();

        if(this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }

        return root;
    }

    heapifyDown() {
        let index = 0;
        const parent = this.heap[index];
        const length = this.heap.length;

        while(true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let leftChild = null;
            let rightChild = null;
            let swapIndex = null;

            if(leftIndex < length) {
                leftChild = this.heap[leftIndex];
                if(leftChild < parent) {
                    swapIndex = leftIndex;
                }
            }

            if(rightIndex < length) {
                rightChild = this.heap[rightIndex];

                if(
                    (swapIndex === null && parent > rightChild) ||
                    (swapIndex !== null && leftChild > rightChild) 
                ) {
                    swapIndex = rightIndex;
                }
            }

            if(swapIndex === null) break;

            [this.heap[swapIndex], this.heap[index]] = [this.heap[index], this.heap[swapIndex]];
            index = swapIndex;
        }
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const maxScore = function(nums1, nums2, k) {
    const paired = nums1.map((e, i) => [e, nums2[i]]);
    paired.sort((a,b) => b[1] - a[1]);

    let sum = 0;
    let score = 0;
    const queue = new Priority_Queue();

    for(const [num1, num2] of paired) {
        sum += num1;
        queue.enqueue(num1);

        if(queue.length > k) {
            sum -= queue.dequeue();
        }

        if(queue.length === k) {
            score = Math.max(score, sum * num2);
        }
    }

    return score;
};
