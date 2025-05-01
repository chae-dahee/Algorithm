const filePath = process.platform === "linux" ? "dev/stdin" : "8_일반수학1/2292.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);
let count = 1;
let room = 1;
while (N > room) {
  room += 6 * count;
  count++;
}
console.log(count);