const filePath = process.platform === "linux" ? "dev/stdin" : "23_그리디/11047.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K_init] = input.shift().split(" ").map(Number);
const arr = input.map(Number).reverse();
let K = K_init;
let cnt = 0;

for (const coin of arr) {
  if (K === 0) break;
  cnt += Math.floor(K / coin);
  K %= coin;
}
console.log(cnt);