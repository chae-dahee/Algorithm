const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const A = input.slice(0, N).map((item) => item.split("").map(Number));
const B = input.slice(N, N * 2).map((item) => item.split("").map(Number));

console.log(solution(N, M, A, B));

function solution(N, M, A, B) {
  let count = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (A[i][j] !== B[i][j]) {
        flip(i, j);
        count++;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] !== B[i][j]) {
        count = -1;
      }
    }
  }
  return count;
}
function flip(x, y) {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      A[i][j] = 1 - A[i][j];
    }
  }
}
