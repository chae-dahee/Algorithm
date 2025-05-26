const filePath = process.platform === "linux" ? "dev/stdin" : "18_심화2/20920.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const wordMap = new Map();
for (let i = 0; i < n; i++) {
  const word = input[i];
  wordMap.set(word, (wordMap.get(word) || 0) + 1);
}
const words = Array.from(wordMap.entries());
words.sort((a, b) => {
  if (a[1] === b[1]) {
    if (a[0].length === b[0].length) {
      return a[0].localeCompare(b[0]);
    }
    return b[0].length - a[0].length;
  }
  return b[1] - a[1];
});
const ans = [];
for (let i = 0; i < words.length; i++) {
  if (words[i][0].length >= m) {
    ans.push(words[i][0]);
  }
}
console.log(ans.join("\n"));