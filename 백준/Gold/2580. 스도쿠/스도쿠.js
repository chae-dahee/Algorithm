const filePath = process.platform === "linux" ? "dev/stdin" : "20_백트래킹/2580.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map((v) => v.split(" ").map(Number));

let zeroCoords = getZeroCoords();
let N = zeroCoords.length;
let ans = "";

function dfs(depth) {
  if (depth === N) {
    for (let i = 0; i < 9; i++) {
      console.log(input[i].join(" "));
    }
    process.exit(0);
  }

  const [x, y] = zeroCoords[depth];
  for (let num = 1; num <= 9; num++) {
    if (isValid(x, y, num)) {
      input[x][y] = num;
      dfs(depth + 1);
      input[x][y] = 0;
    }
  }
}

function getZeroCoords() {
  const zeroCoords = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 0) {
        zeroCoords.push([i, j]);
      }
    }
  }
  return zeroCoords;
}

function isValid(x, y, num) {
  // 행 검사
  for (let i = 0; i < 9; i++) {
    if (input[x][i] === num) return false;
  }
  // 열 검사
  for (let i = 0; i < 9; i++) {
    if (input[i][y] === num) return false;
  }
  // 3x3 박스 검사
  const startRow = Math.floor(x / 3) * 3;
  const startCol = Math.floor(y / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (input[startRow + i][startCol + j] === num) return false;
    }
  }
  return true;
}

dfs(0);
