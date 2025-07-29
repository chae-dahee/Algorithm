const filePath = process.platform === "linux" ? "/dev/stdin" : "찬호스쿨_0729/1592.txt";
const [N, M, L] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);
const arr = Array.from({ length: N }, (_, i) => 0);
let cnt = 0;
let index = 0;
arr[0] = 1;

while (arr[index] < M) {
  if (arr[index] % 2 === 1) index = (index - L + N) % N;
  else index = (index + L) % N;
  arr[index]++;
  cnt++;
}

console.log(cnt);