const filePath = process.platform === "linux" ? "dev/stdin" : "10_기하직사각형삼각형/9063.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const [firstX, firstY] = input[1].split(" ").map(Number);
let minX = firstX;
let minY = firstY;
let maxX = firstX;
let maxY = firstY;
for (let i = 2; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  if (x > maxX) maxX = x;
  if (y > maxY) maxY = y;
  if (x < minX) minX = x;
  if (y < minY) minY = y;
}
console.log((maxX - minX) * (maxY - minY));