const filePath = process.platform === "linux" ? "dev/stdin" : "심화1/1157.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().toUpperCase();
const map = {};
let maxCount = 0;
let maxChar = "";
for (const char of input) {
  map[char] = (map[char] || 0) + 1;
  if (map[char] > maxCount) {
    maxCount = map[char];
    maxChar = char;
  } else if (map[char] === maxCount && maxChar !== char) {
    maxChar = "?";
  }
}
console.log(maxChar);