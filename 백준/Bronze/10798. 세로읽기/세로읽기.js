const filePath = process.platform === "linux" ? "dev/stdin" : "7_2차원배열/10798.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.map((e) => e.split(""));
let ans = "";
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < input.length; j++) {
    ans += arr[j][i];
  }
}
console.log(ans.replace(/undefined/g, ""));