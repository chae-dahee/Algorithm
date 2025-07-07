const filePath = process.platform === "linux" ? "dev/stdin" : "22_누적합/10986.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let countArr = new Array(M).fill(0);
let psum = 0;
let ans = 0;
countArr[0]++;

for (let i = 1; i <= N; i++) {
  psum += arr[i - 1];
  ans += countArr[psum % M];
  countArr[psum % M]++;
}

console.log(ans);