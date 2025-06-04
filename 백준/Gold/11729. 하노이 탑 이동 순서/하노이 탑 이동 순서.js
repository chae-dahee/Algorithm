const filePath =
  process.platform === "linux" ? "dev/stdin" : "19_재귀/2447.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());
let cnt = 0;
let ans = "";
function hanoi(n, start, mid, end) {
  if (n === 0) {
    return;
  } else {
    hanoi(n - 1, start, end, mid);
    ans += `${start} ${end}\n`;
    cnt++;
    hanoi(n - 1, mid, start, end);
  }
}
hanoi(N, 1, 2, 3);
console.log(cnt);
console.log(ans);
