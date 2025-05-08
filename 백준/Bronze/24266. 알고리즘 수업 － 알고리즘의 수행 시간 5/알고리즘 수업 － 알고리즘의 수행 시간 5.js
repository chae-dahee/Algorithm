const filePath = process.platform === "linux" ? "dev/stdin" : "11_시간복잡도/24266.txt";
const fs = require("fs");
const n = fs.readFileSync(filePath).toString().trim();
let num = BigInt(n);
console.log(`${num * num * num}`);
console.log(3);