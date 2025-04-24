const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "문자열/11718.txt";
const input = fs.readFileSync(filePath).toString().trim();
console.log(input);