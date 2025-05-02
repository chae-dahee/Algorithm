const filePath = process.platform === "linux" ? "dev/stdin" : "9_약수배수소수/1978.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input[0];
const arr = input[1].split(" ").map(Number);
let cnt = 0;
for (let i = 0; i < N; i++) {
  let flag = true;
  if (arr[i] === 1) continue;
  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j == 0) {
      flag = false;
      break;
    }
  }
  if (flag) cnt++;
}
console.log(cnt);