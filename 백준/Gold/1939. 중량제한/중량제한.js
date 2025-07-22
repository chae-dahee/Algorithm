const filePath =
  process.platform === "linux" ? "/dev/stdin" : "찬호스쿨_0722/1939.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      currentIndex > 0 &&
      this.heap[parentIndex][0] > this.heap[currentIndex][0]
    ) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    if (this.heap.length === 0) return null;
    const returnValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;
    while (true) {
      let leftIndex = currentIndex * 2 + 1;
      let rightIndex = currentIndex * 2 + 2;
      let smallest = currentIndex;
      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex][0] < this.heap[smallest][0]
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex][0] < this.heap[smallest][0]
      ) {
        smallest = rightIndex;
      }
      if (smallest === currentIndex) break;
      [this.heap[currentIndex], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[currentIndex],
      ];
      currentIndex = smallest;
    }
    return returnValue;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

const [N, M] = input[0].split(" ").map(Number);
const adj = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const [a, b, c] = input[i + 1].split(" ").map(Number);
  adj[a].push([b, c]);
  adj[b].push([a, c]);
}
const [start, destination] = input[M + 1].split(" ").map(Number);

const max_capacity = new Array(N + 1).fill(0);
const pq = new MinHeap();

pq.push([-Infinity, start]);
max_capacity[start] = Infinity;

while (!pq.isEmpty()) {
  const [neg_capacity, current] = pq.pop();
  const capacity = -neg_capacity;
  if (capacity < max_capacity[current]) continue;

  for (const [next, weight] of adj[current]) {
    const new_capacity = Math.min(capacity, weight);
    if (new_capacity > max_capacity[next]) {
      max_capacity[next] = new_capacity;
      pq.push([-new_capacity, next]);
    }
  }
}
console.log(max_capacity[destination]);
