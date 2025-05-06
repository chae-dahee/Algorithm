const filePath = process.platform === "linux"? "dev/stdin": "10_기하직사각형삼각형/15894.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
console.log(input * 4);