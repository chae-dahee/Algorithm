const filePath = process.platform === "linux" ? "dev/stdin" : "13_정렬/18870.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0];
const arr = input[1].split(" ").map(Number);
const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
const valueMap = new Map();
for (let i = 0; i < sortedArr.length; i++) {
  valueMap.set(sortedArr[i], i);
}
const result = arr.map((v) => valueMap.get(v));
console.log(result.join(" "));