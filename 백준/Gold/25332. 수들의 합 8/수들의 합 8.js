const filePath = process.platform === "linux" ? "dev/stdin" : "0617_찬호스쿨/25332.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const A = input[0].split(" ").map(Number);
const B = input[1].split(" ").map(Number);

const C = new Array(N).fill(0);
for (let i = 0; i < N; i++) {
  C[i] = A[i] - B[i];
}

const prefixSum = new Array(N + 1).fill(0);
for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + C[i];
}

const sumCount = new Map();
let cnt = 0;

for (let i = 0; i <= N; i++) {
  const sum = prefixSum[i];
  if (sumCount.has(sum)) {
    cnt += sumCount.get(sum);
  }
  sumCount.set(sum, (sumCount.get(sum) || 0) + 1);
}

console.log(cnt);