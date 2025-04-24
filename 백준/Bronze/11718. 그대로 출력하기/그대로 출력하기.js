const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "문자열/11718.txt";
console.log(fs.readFileSync(filePath).toString().trim());