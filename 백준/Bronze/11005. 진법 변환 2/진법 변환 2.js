const filePath = process.platform === "linux" ? "dev/stdin" : "8_일반수학1/11005.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const [N, B] = input;
const result = N.toString(B).toUpperCase();
console.log(result);