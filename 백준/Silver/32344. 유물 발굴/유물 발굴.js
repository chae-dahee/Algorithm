const filePath = process.platform === "linux" ? "dev/stdin" : "찬호스쿨_0708/32344.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[1]);
const artifacts = new Map();

for (let i = 0; i < N; i++) {
  const [a, v, h] = input[i + 2].split(" ").map(Number);
  if (!artifacts.has(a)) {
    artifacts.set(a, []);
  }
  artifacts.get(a).push([v, h]);
}

let maxSize = 0;
let best = 0;

for (const [num, pieces] of artifacts) {
  if (pieces.length === 0) continue;
  let minRow = pieces[0][0],
    maxRow = pieces[0][0],
    minCol = pieces[0][1],
    maxCol = pieces[0][1];
  for (const [row, col] of pieces) {
    minRow = Math.min(minRow, row);
    maxRow = Math.max(maxRow, row);
    minCol = Math.min(minCol, col);
    maxCol = Math.max(maxCol, col);
  }
  const size = (maxCol - minCol + 1) * (maxRow - minRow + 1);
  if (size > maxSize || (size === maxSize && num < best)) {
    maxSize = size;
    best = num;
  }
}

console.log(best, maxSize);