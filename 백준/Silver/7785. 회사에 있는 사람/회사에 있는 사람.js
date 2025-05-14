const filePath = process.platform === "linux" ? "dev/stdin" : "14_집합맵/7785.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0];
const log = input.slice(1);
const logMap = new Map();
for (let i = 0; i < n; i++) {
  const [name, entry] = log[i].split(" ");
  if (entry === "enter") {
    logMap.set(name, true);
  } else {
    logMap.delete(name);
  }
}
console.log(
  Array.from(logMap.keys())
    .sort((a, b) => (a > b ? -1 : 1))
    .join("\n")
);