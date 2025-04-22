const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./2884.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
let H = input[0];
let M = input[1];

if (M >= 45) M -= 45;
else {
  H == 0 ? (H = 23) : H--;
  M = 60 - (45 - M);
}
console.log(H, M);
