const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "1차원배열/5597.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = Array(30)
  .fill()
  .map((v, i) => i + 1);

const ans = arr.filter((e) => !input.map(Number).includes(e));
console.log(ans.join(" "));
