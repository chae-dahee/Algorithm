const filePath = process.platform === "linux" ? "dev/stdin" : "18_심화2/25192.txt";
const fs = require("fs");
const arr = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(arr.shift());
let cnt = 0;
const set = new Set();
for (let i = 0; i < n; i++) {
  if (arr[i] === "ENTER") {
    set.clear();
  } else {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
      cnt++;
    }
  }
}
console.log(cnt);