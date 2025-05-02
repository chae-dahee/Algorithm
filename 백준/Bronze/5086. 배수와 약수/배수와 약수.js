const filePath = process.platform === "linux" ? "dev/stdin" : "9_약수배수소수/5086.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  if (A === 0 && B === 0) break;
  if (B % A === 0) console.log("factor");
  else if (A % B === 0) console.log("multiple");
  else console.log("neither");
}