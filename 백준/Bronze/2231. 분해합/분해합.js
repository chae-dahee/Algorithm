const filePath = process.platform === "linux" ? "dev/stdin" : "12_브루트포스/2231.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);
let ans = 0;
for (let i = 0; i < N; i++) {
  let sum = i.toString().split("").reduce((acc, cur) => acc + Number(cur), 0) + i;
  if (sum === N) {
    ans = i;
    break;
  }
}
console.log(ans);