const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "1차원배열/10870.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(" ");
const findNum = input[2];
const ans = arr.filter((v) => v === findNum);

console.log(ans.length);