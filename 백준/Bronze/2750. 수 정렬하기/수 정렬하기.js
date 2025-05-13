const filePath = process.platform === "linux" ? "dev/stdin" : "13_정렬/2750.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number); 
const n = input[0];
const arr = input.slice(1);
arr.sort((a, b) => a - b);
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}