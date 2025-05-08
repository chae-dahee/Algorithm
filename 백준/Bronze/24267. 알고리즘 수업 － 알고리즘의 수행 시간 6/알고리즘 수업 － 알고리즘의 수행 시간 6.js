const filePath = process.platform === "linux" ? "dev/stdin" : "11_시간복잡도/24267.txt";
const fs = require("fs");
const n = fs.readFileSync(filePath).toString().trim();
let num = BigInt(n);
console.log(`${ (num * (num - 1n) * (num - 2n)) / 6n }`);
console.log(3);