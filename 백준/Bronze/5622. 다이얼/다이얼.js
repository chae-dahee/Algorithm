const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "문자열/5622.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");
const alphabet = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let cnt = 0;
for (let i = 0; i < alphabet.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (alphabet[i].includes(input[j])) cnt += i + 3;
  }
}
console.log(cnt);