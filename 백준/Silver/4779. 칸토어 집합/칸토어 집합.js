const filePath = process.platform === "linux" ? "dev/stdin" : "19_재귀/4779.txt";
const arr = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const cantor = (n) => {
  if (n === 1) return "-";

  const prev = cantor(n / 3);
  const space = " ".repeat(n / 3);

  return prev + space + prev;
};

for (let n of arr) {
  console.log(cantor(Math.pow(3, n)));
}