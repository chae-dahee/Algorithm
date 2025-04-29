const filePath = process.platform === "linux" ? "dev/stdin" : "심화1/2941.txt";
const fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim();
const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
for (let x of alphabet) {
  input = input.replaceAll(x, "@");
}
console.log(input.length);