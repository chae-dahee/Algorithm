const filePath = process.platform === "linux" ? "dev/stdin" : "12_브루트포스/1436.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);
let cnt = 0;
let title = 665;
while (cnt < n) {
  title++;
  if (title.toString().includes("666")) cnt++;
}
console.log(title);