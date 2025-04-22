const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "1차원배열/3052.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input.map((e) => e % 42);
const set = new Set(arr);
console.log([...set].length);
