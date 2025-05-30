const filePath = process.platform === "linux" ? "dev/stdin" : "19_재귀/2447.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());
let ans = "";
const star = (i, j, n) => {
  if (i % 3 === 1 && j % 3 === 1) {
    ans += " ";
  } else {
    if (n === 1) {
      ans += "*";
    } else {
      star(Math.trunc(i / 3), Math.trunc(j / 3), Math.trunc(n / 3));
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    star(i, j, N);
  }
  ans += "\n";
}
console.log(ans);