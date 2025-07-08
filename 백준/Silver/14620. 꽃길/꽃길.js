const filePath = process.platform === "linux" ? "dev/stdin" : "찬호스쿨_0708/14620.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));
const used = Array.from({ length: N }, () => Array(N).fill(false));
let minCost = Infinity;

const dx = [-1, 0, 1, 0, 0];
const dy = [0, 1, 0, -1, 0];

function isValid(x, y, used) {
  for (let i = 0; i < 5; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= N || ny < 0 || ny >= N) return false;
    if (used[nx][ny]) return false;
  }
  return true;
}

function getCost(x, y) {
  let cost = 0;
  for (let i = 0; i < 5; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    cost += arr[nx][ny];
  }
  return cost;
}

function dfs(count, totalCost, used) {
  if (count === 3) {
    minCost = Math.min(minCost, totalCost);
    return;
  }
  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < N - 1; j++) {
      if (isValid(i, j, used)) {
        for (let k = 0; k < 5; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          used[nx][ny] = true;
        }
        dfs(count + 1, totalCost + getCost(i, j), used);
        for (let k = 0; k < 5; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          used[nx][ny] = false;
        }
      }
    }
  }
}

dfs(0, 0, used);
console.log(minCost);