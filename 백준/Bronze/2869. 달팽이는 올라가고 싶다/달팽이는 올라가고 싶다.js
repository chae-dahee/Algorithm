const filePath = process.platform === "linux" ? "dev/stdin" : "8_일반수학1/2869.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const [A, B, V] = input;
console.log(Math.ceil((V - A) / (A - B)) + 1);