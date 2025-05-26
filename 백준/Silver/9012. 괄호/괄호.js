const filePath = process.platform === "linux" ? "dev/stdin" : "16_스택큐덱/9012.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input.shift());
for (let i = 0; i < T; i++) {
  const stack = [];
  const str = input[i];
  let result = true;
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "(") {
      stack.push(str[j]);
    } else if (str[j] === ")") {
      if (!stack.pop()) {
        result = false;
      }
    }
  }
  if (stack.length !== 0) {
    result = false;
  }
  console.log(result ? "YES" : "NO");
}