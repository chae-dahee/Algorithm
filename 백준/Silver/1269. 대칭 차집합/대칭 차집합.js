const filePath = process.platform === "linux" ? "dev/stdin" : "14_집합맵/1269.txt";
const fs = require("fs");
const [_, arr1, arr2] = fs.readFileSync(filePath).toString().trim().split("\n");
const A = arr1.split(" ");
const B = arr2.split(" ");
let cnt = A.length + B.length;
const AandB = [...new Set(A.concat(B))];
console.log(AandB.length * 2 - cnt);