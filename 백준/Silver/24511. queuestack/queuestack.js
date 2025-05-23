const filePath = process.platform === "linux" ? "dev/stdin" : "16_스택큐덱/24511.txt";
const fs = require("fs");
const [N, a, b, M, c] = fs.readFileSync(filePath).toString().trim().split("\n");
const A = a.split(" ").map(Number);
const B = b.split(" ").map(Number);
const C = c.split(" ").map(Number);
let ans = [];
for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    ans.push(B[i]);
  }
}
console.log(ans.reverse().concat(C).slice(0, M).map(String).join(" "));
