const filePath = process.platform === "linux" ? "dev/stdin" : "0521_찬호스쿨/26069.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  const [nameA, nameB] = input[i].split(" ");
  arr.push([nameA, nameB]);
}
let dance = new Set();
for (let i = 0; i < n; i++) {
  if (arr[i][0] === "ChongChong") {
    dance.add(arr[i][1]);
  }
  if (arr[i][1] === "ChongChong") {
    dance.add(arr[i][0]);
  }
  if (dance.has(arr[i][0])) {
    dance.add(arr[i][1]);
  }
  if (dance.has(arr[i][1])) {
    dance.add(arr[i][0]);
  }
}
console.log(dance.size);