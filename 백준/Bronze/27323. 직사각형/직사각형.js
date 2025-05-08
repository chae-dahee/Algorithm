const filePath = process.platform === "linux"? "dev/stdin": "10_기하직사각형삼각형/14215.txt";
const fs = require("fs");
const [A,B] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
console.log(A*B)