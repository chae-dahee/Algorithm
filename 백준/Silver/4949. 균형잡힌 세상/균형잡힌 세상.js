const filePath = process.platform === "linux" ? "dev/stdin" : "16_스택큐덱/4949.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
for (let text of input) {
  const stack = [];
  let isCompare = true;
  if (text == ".") break;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "[" || text[i] == "(") {
      stack.push(text[i]);
    } else if (text[i] == "]") {
      if (stack[stack.length - 1] == "[") {
        stack.pop();
      } else {
        isCompare = false;
        break;
      }
    } else if (text[i] == ")") {
      if (stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        isCompare = false;
        break;
      }
    } else if (text[i] == ".") break;
  }
  if (stack.length > 0 || !isCompare) ans.push("no");
  else ans.push("yes");
}
console.log(ans.join("\n"));