const filePath = process.platform === "linux" ? "dev/stdin" : "9_약수배수소수/11653.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
let N = Number(input);
for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    console.log(i);
    N /= i;
  }
}