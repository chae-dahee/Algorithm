const filePath = process.platform === "linux" ? "dev/stdin" : "18_심화2/1037.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number)).flat();
const max = Math.max(...arr);
const min = Math.min(...arr);
console.log(max * min);