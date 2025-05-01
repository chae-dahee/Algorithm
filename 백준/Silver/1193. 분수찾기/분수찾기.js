const filePath = process.platform === "linux" ? "dev/stdin" : "8_일반수학1/1193.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();
const X = Number(input);
let limit = 1,
  n = 1;
while (limit < X) {
  limit += n + 1;
  n++;
}
const a = n - (limit - X);
if (n % 2 === 0) {
  console.log(`${a}/${n - a + 1}`);
} else {
  console.log(`${n - a + 1}/${a}`);
}