const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "문자열/2675.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < T; i++) {
  const [R, S] = input[i].split(" ");
  console.log(S.split("").map((e) => e.repeat(R)).join(""));
}
