const filePath = process.platform === "linux" ? "dev/stdin" : "12_브루트포스/1018.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((v) => v.split(""));
const line = ["WBWBWBWB", "BWBWBWBW"];
let ans = [];
for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    for (let k = 0; k < 2; k++) {
      let cnt = 0;
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (arr[i + x][j + y] === line[(k + x) % 2][y]) cnt++;
        }
      }
      ans.push(cnt);
    }
  }
}
console.log(Math.min(...ans));