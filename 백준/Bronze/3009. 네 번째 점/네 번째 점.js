const filePath = process.platform === "linux" ? "dev/stdin" : "10_기하직사각형삼각형/3009.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const xArr = [];
const yArr = [];
input.forEach((v) => {
  const [x, y] = v.split(" ").map(Number);
  xArr.push(x);
  yArr.push(y);
});
const findOnce = (arr) => arr[0] === arr[1] ? arr[2] : arr[0] === arr[2] ? arr[1] : arr[0];
console.log(findOnce(xArr), findOnce(yArr));