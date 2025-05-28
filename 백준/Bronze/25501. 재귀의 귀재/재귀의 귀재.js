const filePath = process.platform === "linux" ? "dev/stdin" : "19_재귀/25501.txt";
const arr = require("fs").readFileSync(filePath).toString().trim().split("\n");
const n = Number(arr.shift());
let cnt = 1;
const recursion = (str, l, r) => {
  if (l >= r) return 1;
  if (str[l] !== str[r]) return 0;
  cnt++;
  return recursion(str, l + 1, r - 1);
};
const isPalindrome = (str) => {
  return recursion(str, 0, str.length - 1);
};
for (let i = 0; i < n; i++) {
  console.log(isPalindrome(arr[i]), cnt);
  cnt = 1;
}