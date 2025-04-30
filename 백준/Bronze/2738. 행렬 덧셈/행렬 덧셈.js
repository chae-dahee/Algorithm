const filePath = process.platform === "linux" ? "dev/stdin" : "7_2차원배열/2738.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arrA = input.slice(1, N + 1).map((e) => e.split(" ").map(Number));
const arrB = input.slice(1 + N).map((e) => e.split(" ").map(Number));
for (let i = 0; i < N; i++) {
  let ans = [];
  for (let j = 0; j < M; j++) {
    ans.push(arrA[i][j] + arrB[i][j]);
  }
  console.log(ans.join(" "));
}