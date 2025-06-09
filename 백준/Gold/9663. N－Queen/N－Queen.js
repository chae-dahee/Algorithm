const filePath = process.platform === "linux" ? "dev/stdin" : "20_백트래킹/9663.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());
let cnt = 0;
const arr = Array(N).fill(0);
const visited = Array(2 * N - 1).fill(false);
const visited2 = Array(2 * N - 1).fill(false);
const backTracking = (depth) => {
  if (depth === N) {
    cnt++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (arr[i] || visited[i + depth] || visited2[depth - i + N - 1]) continue;
    arr[i] = visited[i + depth] = visited2[depth - i + N - 1] = true;
    backTracking(depth + 1);
    arr[i] = visited[i + depth] = visited2[depth - i + N - 1] = false;
  }
};
backTracking(0);
console.log(cnt);