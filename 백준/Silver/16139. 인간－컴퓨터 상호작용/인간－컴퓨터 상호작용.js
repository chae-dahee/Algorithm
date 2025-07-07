const filePath = process.platform === "linux" ? "dev/stdin" : "22_누적합/16139.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const S = input.shift();
const q = parseInt(input.shift());

const prefixSum = {};
for (let i = 0; i < 26; i++) {
  const char = String.fromCharCode(97 + i);
  prefixSum[char] = new Array(S.length + 1).fill(0);

  for (let j = 0; j < S.length; j++) {
    prefixSum[char][j + 1] = prefixSum[char][j] + (S[j] === char ? 1 : 0);
  }
}

for (let i = 0; i < q; i++) {
  const [alpha, l, r] = input[i].split(" ");
  const count = prefixSum[alpha][parseInt(r) + 1] - prefixSum[alpha][parseInt(l)];
  console.log(count);
}