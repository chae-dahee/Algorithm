const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "문자열/10809.txt";
const S = fs.readFileSync(filePath).toString().trim().split("");
const ans = [];

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  ans.push(S.indexOf(String.fromCharCode(i)));
}

console.log(ans.join(" "));