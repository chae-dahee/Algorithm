const filePath = process.platform === "linux" ? "dev/stdin" : "20_백트래킹/14889.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const S = input.map((v) => v.split(" ").map(Number));
const visited = Array(N).fill(false);
let minDiff = Infinity;

function dfs(depth, idx) {
  if (depth === N / 2) {
    calculateDiff();
    return;
  }
  for (let i = idx; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(depth + 1, i + 1);
      visited[i] = false;
    }
  }
}

function calculateDiff() {
  let teamStart = 0;
  let teamLink = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i] && visited[j]) {
        teamStart += S[i][j];
      } else if (!visited[i] && !visited[j]) {
        teamLink += S[i][j];
      }
    }
  }
  const diff = Math.abs(teamStart - teamLink);
  minDiff = Math.min(minDiff, diff);
}

dfs(0, 0);
console.log(minDiff);