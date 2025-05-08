const filePath = process.platform === "linux" ? "dev/stdin" : "12_브루트포스/2798.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);
let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= m && sum > max) {
        max = sum;
      }
    }
  }
}
console.log(max);