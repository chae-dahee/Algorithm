const filePath = process.platform === "linux" ? "dev/stdin" : "심화1/10988.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
console.log(input.includes(input.split("").reverse().join("")) ? 1 : 0);