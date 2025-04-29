const filePath = process.platform === "linux" ? "dev/stdin" : "심화1/1316.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input[0];
let cnt = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  let isGroupWord = true;
  const seen = new Set();
  let prev = "";

  for (const char of word) {
    if (char !== prev) {
      if (seen.has(char)) {
        isGroupWord = false;
        break;
      }
      seen.add(char);
    }
    prev = char;
  }

  if (isGroupWord) cnt++;
}

console.log(cnt);
