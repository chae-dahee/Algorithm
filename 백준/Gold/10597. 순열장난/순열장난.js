const filePath = process.platform === "linux" ? "dev/stdin" : "0617_찬호스쿨/10597.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("").map(Number);

const N = input.length;
const result = [];
const used = new Set();

function findLength() {
  if (N <= 9) return N;
  return 9 + Math.floor((N - 9) / 2);
}
const length = findLength();

function isValid(num) {
  return num >= 1 && num <= length && !used.has(num);
}

function backtracking(idx) {
  if (idx === N) {
    return true;
  }

  let num = input[idx];
  if (isValid(num)) {
    used.add(num);
    result.push(num);
    if (backtracking(idx + 1)) return true;
    used.delete(num);
    result.pop();
  }

  if (idx + 1 < N) {
    num = input[idx] * 10 + input[idx + 1];
    if (isValid(num)) {
      used.add(num);
      result.push(num);
      if (backtracking(idx + 2)) return true;
      used.delete(num);
      result.pop();
    }
  }
  return false;
}

backtracking(0);
console.log(result.join(" "));