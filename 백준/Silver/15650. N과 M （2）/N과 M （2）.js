const filePath = process.platform === "linux" ? "dev/stdin" : "20_백트래킹/15649.txt";
const [N, M] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);
const visited = new Array(N + 1).fill(false);
const arr = [];
const dfs = (depth, start) => {
  if (depth === M) {
    console.log(arr.join(" "));
    return;
  }
  for (let i = start; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr[depth] = i;
      dfs(depth + 1, i + 1);
      visited[i] = false;
    }
  }
};
dfs(0, 1);