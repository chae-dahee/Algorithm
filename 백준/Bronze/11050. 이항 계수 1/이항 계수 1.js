const filePath = process.platform === "linux" ? "dev/stdin" : "17_조합론/11050.txt";
const fs = require("fs");
const [n, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(n) / (factorial(k) * factorial(n - k)));