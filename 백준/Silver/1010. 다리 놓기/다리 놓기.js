const filePath = process.platform === "linux" ? "dev/stdin" : "17_조합론/1010.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));
let ans = [];
for (let i = 0; i < T; i++) {
  const [n, m] = arr[i];
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let row = 0; row <= m; row++) {
    dp[row][0] = 1;
  }
  for (let row = 1; row <= m; row++) {
    for (let col = 1; col <= n; col++) {
      dp[row][col] = dp[row - 1][col - 1] + dp[row - 1][col];
    }
  }
  ans.push(dp[m][n]);
}
console.log(ans.join("\n"));