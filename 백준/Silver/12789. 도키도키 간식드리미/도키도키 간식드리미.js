const filePath = process.platform === "linux" ? "dev/stdin" : "16_스택큐덱/12789.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0];
const arr = input[1].split(" ").map(Number);
const stack = [];
let cur = 1;
let i = 0;
while (i < n) {
  if (arr[i] === cur) {
    cur++;
    i++;
  } else {
    if (stack.length > 0 && stack.at(-1) === cur) {
      stack.pop();
      cur++;
    } else {
      stack.push(arr[i]);
      i++;
    }
  }
}
for (let i = stack.length - 1; i >= 0; i--) {
  if (stack[i] === cur) {
    stack.pop();
    cur++;
  }
}
console.log(stack.length > 0 ? "Sad" : "Nice");