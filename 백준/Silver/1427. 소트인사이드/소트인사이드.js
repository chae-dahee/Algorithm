const filePath = process.platform === "linux" ? "dev/stdin" : "13_정렬/1427.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("").sort((a, b) => b - a);
const ans = input.join("");
console.log(ans);