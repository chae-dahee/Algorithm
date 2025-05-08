const filePath = process.platform === "linux" ? "dev/stdin" : "12_브루트포스/19532.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [a, b, c, d, e, f] = input.map(Number);
for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(x, y);
      break;
    }
  }
}