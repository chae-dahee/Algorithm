const filePath = process.platform === "linux" ? "dev/stdin" : "10_기하직사각형삼각형/14215.txt";
const fs = require("fs");
const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const max = Math.max(a, b, c);
const sum = a + b + c;
const otherSum = sum - max;
console.log(otherSum > max ? sum : otherSum * 2 - 1);