/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
const totalCost = function(costs, k, candidates) {
    let left = candidates;
    let right = costs.length - candidates;

    if (right < left) {
        left = 0;
        right = 0;
    }

    const heapL = costs.slice(0, left);
    const heapR = costs.slice(right);

    const shiftDown = (heap, index) => {
        const left = 2 * index + 1;
        const right = left + 1;

        if (left >= heap.length) {
        return;
        }

        if (right === heap.length) {
        if (heap[left] < heap[index]) {
            [heap[left], heap[index]] = [heap[index], heap[left]];
        }
        return;
        }

        if (heap[left] > heap[right]) {
        if (heap[right] < heap[index]) {
            [heap[right], heap[index]] = [heap[index], heap[right]];
            shiftDown(heap, right);
        }
        } else {
        if (heap[left] < heap[index]) {
            [heap[left], heap[index]] = [heap[index], heap[left]];
            shiftDown(heap, left);
        }
        }
    };

    const heapify = (heap) => {
        for (let i = Math.floor((heap.length - 2) / 2); i >= 0; i -= 1) {
        shiftDown(heap, i);
        }
    };

    heapify(heapL);
    heapify(heapR);

    let result = 0;

    for (let i = 0; i < k; i++) {
        if ((heapR[0] ?? Infinity) < (heapL[0] ?? Infinity)) {
        result += heapR[0];

        if (right > left) {
            right -= 1;
            heapR[0] = costs[right];
        } else {
            heapR[0] = heapR.at(-1);
            heapR.pop();
        }

        shiftDown(heapR, 0);
        } else {
        result += heapL[0];

        if (right > left) {
            heapL[0] = costs[left];
            left += 1;
        } else {
            heapL[0] = heapL.at(-1);
            heapL.pop();
        }
        shiftDown(heapL, 0);
        }
    }

    return result;
};