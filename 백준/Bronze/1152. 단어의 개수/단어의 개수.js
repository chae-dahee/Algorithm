const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "문자열/1152.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
console.log(input.includes("") ? 0 : input.length);