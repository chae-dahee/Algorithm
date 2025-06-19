const filePath = process.platform === "linux" ? "dev/stdin" : "22_누적합/11659.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const numbersInput = input.shift().split(" ").map(Number);

const arr = Array(N + 1);
for (let i = 0; i < N; i++) {
  arr[i + 1] = numbersInput[i];
}

const psum = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  psum[i] = psum[i - 1] + arr[i];
}

let result = "";
for (let k = 0; k < M; k++) {
  const [i, j] = input[k].split(" ").map(Number);
  const rangeSum = psum[j] - psum[i - 1];
  result += rangeSum + "\n";
}

console.log(result.trim());