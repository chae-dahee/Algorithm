const filePath = process.platform === "linux" ? "dev/stdin" : "13_정렬/1181.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
const ans = arr.sort((a, b) => {
  if (a.length === b.length) return a.localeCompare(b);
  return a.length - b.length;
});
const set = new Set(ans);
for (let i of set) {
  console.log(i);
}