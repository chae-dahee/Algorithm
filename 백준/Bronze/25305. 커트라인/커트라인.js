const filePath = process.platform === "linux" ? "dev/stdin" : "13_정렬/25305.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number).sort((a, b) => b - a);
console.log(arr[k - 1]);