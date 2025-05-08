const filePath = process.platform === "linux" ? "dev/stdin" : "11_시간복잡도/24313.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a1, a0] = input[0].split(" ").map(Number);
const c = input[1];
const n0 = input[2];
if (a1 * n0 + a0 <= c * n0 && a1 <= c) {
  console.log(1);
} else {
  console.log(0);
}