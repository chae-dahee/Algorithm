const filePath = process.platform === "linux" ? "dev/stdin" : "11_시간복잡도/24263.txt";
const fs = require("fs");
const n = fs.readFileSync(filePath).toString().trim();
console.log(n);
console.log(1);