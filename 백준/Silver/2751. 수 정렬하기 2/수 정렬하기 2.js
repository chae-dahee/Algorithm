const filePath = process.platform === "linux" ? "dev/stdin" : "13_정렬/2751.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const arr = input.slice(1).sort((a, b) => a - b);
const ans = arr.join("\n");
console.log(ans);