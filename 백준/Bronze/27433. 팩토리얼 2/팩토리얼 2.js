const filePath = process.platform === "linux" ? "dev/stdin" : "19_재귀/27433.txt";
const n = Number(require("fs").readFileSync(filePath).toString().trim());
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(n));