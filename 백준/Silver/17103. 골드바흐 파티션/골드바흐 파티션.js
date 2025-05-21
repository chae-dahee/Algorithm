const filePath = process.platform === "linux" ? "dev/stdin" : "15_약수배수소수2/17103.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const t = input.shift();
const n = input.slice(0, t);
const maxNum = Math.max(...n);
let sleve = Array.from({ length: maxNum + 1 }, () => true);
sleve[0] = false;
sleve[1] = false;
let ans = [];
for (let i = 2; i <= Math.sqrt(maxNum); i++) {
  if (sleve[i]) {
    for (let j = 2; j <= maxNum / i; j++) {
      sleve[i * j] = false;
    }
  }
}
for (let x of n) {
  let count = 0;
  for (let i = 2; i <= x / 2; i++) {
    if (sleve[i] && sleve[x - i]) count++;
  }
  ans.push(count);
}
console.log(ans.join("\n"));