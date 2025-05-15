const filePath = process.platform === "linux" ? "dev/stdin" : "15_약수배수소수2/13241.txt";
const fs = require("fs");
const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));
console.log((a * b) / getGcd(a, b));