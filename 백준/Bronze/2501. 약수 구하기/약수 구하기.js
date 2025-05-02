const filePath = process.platform === "linux" ? "dev/stdin" : "9_약수배수소수/2501.txt";
const fs = require("fs");
const [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let cnt = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    cnt++;
    if (cnt === K) {
      console.log(i);
      break;
    }
  }
}
if (cnt < K) console.log(0);