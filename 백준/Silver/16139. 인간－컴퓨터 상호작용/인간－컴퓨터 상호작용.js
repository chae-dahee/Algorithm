const filePath = process.platform === "linux" ? "dev/stdin" : "22_누적합/16139.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const S = input[0];
const q = parseInt(input[1]);
let result = [];

const usedChars = new Set();
for (let i = 2; i < 2 + q; i++) {
  const alpha = input[i].split(" ")[0];
  usedChars.add(alpha);
}

const prefixSum = {};
for (const char of usedChars) {
  prefixSum[char] = new Array(S.length + 1).fill(0);
    for (let j = 0; j < S.length; j++) {
    prefixSum[char][j + 1] = prefixSum[char][j] + (S[j] === char ? 1 : 0);
  }
}

for (let i = 0; i < q; i++) {
  const [alpha, left, right] = input[i + 2].split(" ");
  const count = prefixSum[alpha][parseInt(right) + 1] - prefixSum[alpha][parseInt(left)];
  result.push(count);
}

console.log(result.join("\n"));