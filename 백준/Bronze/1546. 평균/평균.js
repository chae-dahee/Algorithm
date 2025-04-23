const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "1차원배열/1546.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const M = Math.max(...arr);

console.log(arr.map((e) => (e / M) * 100).reduce((acc, cur) => acc + cur) / N);
