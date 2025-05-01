const filePath = process.platform === "linux" ? "dev/stdin" : "8_일반수학1/2720.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);
const testCases = input.slice(1, T + 1).map(Number);
const quarter = 25;
const dime = 10;
const nickel = 5;
const penny = 1;
for (let i = 0; i < T; i++) {
  const change = testCases[i];
  if (change > 500) break;
  const quarterCount = Math.floor(change / quarter);
  const dimeCount = Math.floor((change % quarter) / dime);
  const nickelCount = Math.floor(((change % quarter) % dime) / nickel);
  const pennyCount = Math.floor((((change % quarter) % dime) % nickel) / penny);
  console.log(quarterCount, dimeCount, nickelCount, pennyCount);
}