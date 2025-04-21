const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let arr = [1, 1, 2, 2, 2, 8];
let ans = [];
ans = input.map((e, i) => arr[i] - e);

console.log(ans.join(" "));