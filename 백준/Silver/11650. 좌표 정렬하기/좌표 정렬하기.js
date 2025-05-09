const filePath = process.platform === "linux" ? "dev/stdin" : "13_정렬/11650.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}
const ans = arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
for (let i = 0; i < n; i++) {
  console.log(ans[i][0], ans[i][1]);
}