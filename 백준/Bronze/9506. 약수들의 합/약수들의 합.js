const filePath = process.platform === "linux" ? "dev/stdin" : "9_약수배수소수/9506.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
for (let i = 0; i < input.length - 1; i++) {
  let sum = 0;
  let str = "";
  for (let j = 1; j < input[i]; j++) {
    if (input[i] % j === 0) {
      sum += j;
      str += `${j} + `;
    }
  }
  if (sum === input[i]) {
    console.log(`${input[i]} = ${str.slice(0, -3)}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
}