const filePath = process.platform === "linux" ? "dev/stdin" : "8_일반수학1/2745.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [N, B] = input;
const result = parseInt(N, B);
console.log(result);