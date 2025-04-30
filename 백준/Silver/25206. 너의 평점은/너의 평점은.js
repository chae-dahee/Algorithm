const filePath = process.platform === "linux" ? "dev/stdin" : "심화1/25206.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let total = 0;
let totalScore = 0;
const grade = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};
for (let i = 0; i < input.length; i++) {
  const [subject, score, gradeValue] = input[i].split(" ");
  if (gradeValue === "P") continue;
  total += Number(score) * grade[gradeValue];
  totalScore += Number(score);
}
console.log((total / totalScore).toFixed(6));