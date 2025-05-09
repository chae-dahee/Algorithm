const filePath = process.platform === "linux" ? "dev/stdin" : "12_브루트포스/2839.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);
let cnt = -1;
let five = Math.floor(n / 5);
while (five >= 0) {
  let reset = n - five * 5;
  if (reset % 3 === 0) {
    cnt = reset / 3 + five;
    break;
  } else {
    five -= 1;
  }
}
console.log(cnt);