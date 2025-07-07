const filePath = process.platform === "linux" ? "dev/stdin" : "22_누적합/2559.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let windowSum = 0;
for (let i = 0; i < K; i++) {
  windowSum += arr[i];
}

let maxSum = windowSum;

for (let r = K; r < N; r++) {
  windowSum += arr[r] - arr[r - K];
  maxSum = Math.max(maxSum, windowSum);
}

console.log(maxSum);