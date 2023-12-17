class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) break;

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  pop() {
    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];

        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];

        /**
          조건 1. left가 parent보다 크고, right가 parent, left보다 작을 때
          조건 2. left가 parent보다 작고, right가 left보다 작을 때,
         */
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  /**
    목적: 길이가 k인 최소 힙  
  */
  const heap = new MinHeap();


 /**
    목적: 순서대로 길이가 k인 최소 힙
  */
  for (let i = 0; i < k; i++) {
    const num = nums[i];
    heap.push(num);
  }

  /**
     k번째부터 작은 최소 힙 만들기
   */
  for (let i = k; i < nums.length; i++) {
    const num = nums[i];

    if (num > heap.peek()) {
      heap.pop();
      heap.push(nums[i]);
    }
  }

  return heap.peek();
};