const filePath = process.platform === "linux" ? "dev/stdin" : "14_집합맵/14425.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const s = input.slice(1, n + 1);
const check = input.slice(n + 1);
const checkMap = new Map();
for (let i = 0; i < s.length; i++) {
  checkMap.set(s[i], true);
}
const result = check.map((v) => (checkMap.has(v) ? 1 : 0)).reduce((acc, cur) => acc + cur, 0);
console.log(result);