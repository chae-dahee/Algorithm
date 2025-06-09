const filePath = process.platform === "linux" ? "dev/stdin" : "20_백트래킹/15649.txt";
const [N, M] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);
const arr = [];
let result = [];
const dfs = (depth, start) => {
  if (depth === M) {
    result.push(arr.join(" "));
    return;
  }
  for (let i = start; i <= N; i++) {
    arr[depth] = i;
    dfs(depth + 1, i);
  }
};
dfs(0, 1);
console.log(result.sort((a, b) => a.localeCompare(b)).join("\n"));