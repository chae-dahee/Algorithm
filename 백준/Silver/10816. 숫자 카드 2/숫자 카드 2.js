const filePath = process.platform === "linux" ? "dev/stdin" : "14_집합맵/10816.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0];
const card = input[1].split(" ").map(Number);
const m = input[2];
const check = input[3].split(" ").map(Number);
const cardMap = new Map();
for (let i = 0; i < n; i++) {
  cardMap.set(card[i], (cardMap.get(card[i]) || 0) + 1);
}
console.log(check.map((v) => (cardMap.has(v) ? cardMap.get(v) : 0)).join(" "));