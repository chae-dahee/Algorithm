const filePath =  process.platform === "linux" ? "dev/stdin" : "14_집합맵/10815.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input[0];
const card = input[1].split(" ").map(Number);
const m = input[2];
const check = input[3].split(" ").map(Number);
const cardMap = new Map();
for (let i = 0; i < card.length; i++) {
  cardMap.set(card[i], true);
}
const result = check.map((v) => (cardMap.has(v) ? 1 : 0));
console.log(result.join(" "));