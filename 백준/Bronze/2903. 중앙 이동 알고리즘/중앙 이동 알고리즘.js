const filePath = process.platform === "linux" ? "dev/stdin" : "8_일반수학1/2903.txt";
const fs = require("fs");
const N = fs.readFileSync(filePath).toString().trim();
const result = Math.pow(2, N) + 1;
console.log(result * result);