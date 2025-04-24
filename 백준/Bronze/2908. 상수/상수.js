const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "문자열/2908.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const arr = input.map((e) => e.split("").reverse().join(""));
console.log(Math.max(...arr));