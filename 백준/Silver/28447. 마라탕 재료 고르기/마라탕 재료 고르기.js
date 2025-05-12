const filePath = process.platform === "linux" ? "dev/stdin" : "0521_찬호스쿨/28447.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const arr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  const row = input[i].split(" ").map(Number);
  for (let j = 1; j <= n; j++) {
    arr[i][j] = row[j - 1];
  }
}
let max = -Infinity;
const sumTaste = (selected) => {
  let taste = 0;
  for (let i = 0; i < selected.length; i++) {
    for (let j = i + 1; j < selected.length; j++) {
      taste += arr[selected[i]][selected[j]];
    }
  }
  return taste;
};
const dfs = (start, selected) => {
  if (selected.length === k) {
    max = Math.max(max, sumTaste(selected));
    return;
  }
  for (let i = start; i <= n; i++) {
    selected.push(i);
    dfs(i + 1, selected);
    selected.pop();
  }
};
dfs(1, []);
console.log(max);