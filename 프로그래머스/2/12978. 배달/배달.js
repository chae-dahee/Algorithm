class MinHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMin() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = null;

            if (leftChildIndex < length) {
                if (this.heap[leftChildIndex][0] < element[0]) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                if (
                    (swap === null && this.heap[rightChildIndex][0] < element[0]) ||
                    (swap !== null && this.heap[rightChildIndex][0] < this.heap[leftChildIndex][0])
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}

function solution(N, road, K) {
    const adj = Array.from({ length: N + 1 }, () => []);
    for (const [u, v, w] of road) {
        adj[u].push({ to: v, time: w });
        adj[v].push({ to: u, time: w });
    }

    const distances = Array(N + 1).fill(Infinity);
    distances[1] = 0;
    
    const pq = new MinHeap();
    pq.insert([0, 1]);
    
    while (!pq.isEmpty()) {
        const [currentTime, currentVillage] = pq.extractMin();

        if (currentTime > distances[currentVillage]) {
            continue;
        }

        for (const neighbor of adj[currentVillage]) {
            const newTime = currentTime + neighbor.time;

            if (newTime < distances[neighbor.to]) {
                distances[neighbor.to] = newTime;
                pq.insert([newTime, neighbor.to]);
            }
        }
    }

    let reachableVillagesCount = 0;
    for (let i = 1; i <= N; i++) {
        if (distances[i] <= K) {
            reachableVillagesCount++;
        }
    }

    return reachableVillagesCount;
}