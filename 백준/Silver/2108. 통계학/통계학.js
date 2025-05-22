const filePath =  process.platform === "linux" ? "dev/stdin" : "18_심화2/2108.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const arr = input.map(Number);
//산술평균
const avg = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n);
console.log(avg.toString());
//중앙값
arr.sort((a, b) => a - b);
console.log(arr[Math.floor(n / 2)].toString());
//최빈값
const map = new Map();
for (let i = 0; i < n; i++) {
  if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
  else map.set(arr[i], 1);
}
const max = Math.max(...map.values());
const maxArr = [];
for (let [key, value] of map.entries()) {
  if (value === max) maxArr.push(key);
}
console.log(maxArr.length > 1 ? maxArr[1].toString() : maxArr[0].toString());
//최댓값-최솟값
console.log((Math.max(...arr) - Math.min(...arr)).toString());