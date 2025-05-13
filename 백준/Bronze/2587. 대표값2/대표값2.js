const filePath = process.platform === "linux" ? "dev/stdin" : "13_정렬/2587.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
console.log(input.reduce((acc, cur) => acc + cur, 0) / 5);
console.log(input.sort((a, b) => a - b)[Math.floor(input.length / 2)]);