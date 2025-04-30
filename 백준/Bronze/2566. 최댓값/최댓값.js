const filePath =
  process.platform === "linux" ? "dev/stdin" : "7_2차원배열/2566.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
let arr = input.split("\n").map((e) => e.split(" ").map(Number));
let max = 0;
let maxX = 0;
let maxY = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
      maxX = i;
      maxY = j;
    }
  }
}
console.log(max);
console.log(maxX + 1, maxY + 1);