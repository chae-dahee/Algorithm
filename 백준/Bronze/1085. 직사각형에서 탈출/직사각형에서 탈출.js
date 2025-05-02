const filePath = process.platform === "linux" ? "dev/stdin" : "10_기하직사각형삼각형/1085.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);
console.log(Math.min(x, y, w - x, h - y));