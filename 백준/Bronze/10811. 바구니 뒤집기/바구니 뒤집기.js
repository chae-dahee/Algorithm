const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "1차원배열/10811.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(i);
}

for (let k = 1; k < M + 1; k++) {
  const [i, j] = input[k].split(" ").map(Number);
  for (let k = i - 1, l = j - 1; k < l; k++, l--) {
    const temp = arr[l];
    arr[l] = arr[k];
    arr[k] = temp;
  }
}
console.log(arr.join(" "));
