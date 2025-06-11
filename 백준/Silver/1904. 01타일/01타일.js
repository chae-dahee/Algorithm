const filePath = process.platform === "linux" ? "dev/stdin" : "21_동적계획법1/1904.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());

const dp = new Array(N + 1).fill(0);
dp[1] = 1;
if (N >= 2) dp[2] = 2;
for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[N]);