const filePath = process.platform === "linux" ? "dev/stdin" : "15_약수배수소수2/1735.txt";
const fs = require("fs");
const [input1, input2] = fs.readFileSync(filePath).toString().trim().split("\n");
const [a1, a2] = input1.split(" ").map(Number);
const [b1, b2] = input2.split(" ").map(Number);
const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));
const addFraction = (a1, b1, a2, b2) => {
  const numerator = a1 * b2 + a2 * b1;
  const denominator = b1 * b2;
  const commonDivisor = getGcd(numerator, denominator);
  const simplifiedNumerator = numerator / commonDivisor;
  const simplifiedDenominator = denominator / commonDivisor;
  return [simplifiedNumerator, simplifiedDenominator];
};
const [numerator, denominator] = addFraction(a1, a2, b1, b2);
console.log(numerator, denominator);