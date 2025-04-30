const filePath = process.platform === "linux" ? "dev/stdin" : "7_2차원배열/2563.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map((e) => e.split(" ").map(Number));
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));
for (let i = 0; i < n; i++) {
  const [x, y] = arr[i];
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      paper[j][k] = 1;
    }
  }
}
console.log(paper.flat().reduce((acc, cur) => acc + cur, 0));