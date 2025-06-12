const filePath = process.platform === "linux" ? "dev/stdin" : "21_동적계획법1/9461.txt";
const [T, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

let memo = new Array(101).fill(0);
memo = [0, 1, 1, 1, 2, 2, ...memo];

function P(N) {
  if (memo[N]) return memo[N];
  else return (memo[N] = P(N - 5) + P(N - 1));
}
for (let i = 0; i < T; i++) {
  console.log(P(input[i]));
}