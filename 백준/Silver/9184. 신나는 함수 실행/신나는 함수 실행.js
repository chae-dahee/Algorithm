const filePath = process.platform === "linux" ? "dev/stdin" : "21_동적계획법1/9184.txt";
const [...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let N = input.length - 1;
let abc = [];
for (let i = 0; i < N; i++) {
  let [a, b, c] = input[i].trim().split(" ").map(Number);
  abc.push([a, b, c]);
}

let dp = new Map();

function w(a, b, c) {
  let key = `${a} ${b} ${c}`;
  if (dp.has(key)) return dp.get(key);
  let result;

  if (a <= 0 || b <= 0 || c <= 0) {
    result = 1;
  } else if (a > 20 || b > 20 || c > 20) {
    result = w(20, 20, 20);
  } else if (a < b && b < c) {
    result = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    result =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }

  dp.set(key, result);
  return result;
}

let ans = "";
for (let i = 0; i < N; i++) {
  let key = `${abc[i][0]} ${abc[i][1]} ${abc[i][2]}`;
  ans += `w(${abc[i][0]}, ${abc[i][1]}, ${abc[i][2]}) = `;
  if (dp.has(key)) ans += dp.get(key) + "\n";
  else ans += w(abc[i][0], abc[i][1], abc[i][2]) + "\n";
}

console.log(ans.trim());