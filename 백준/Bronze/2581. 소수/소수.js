const filePath = process.platform === "linux" ? "dev/stdin" : "9_약수배수소수/2581.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const M = input[0];
const N = input[1];
let sum = 0;
let min = 0;
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    sum += i;
    if (min === 0) min = i;
  }
}
if (sum === 0) console.log(-1);
else console.log(sum + "\n" + min);