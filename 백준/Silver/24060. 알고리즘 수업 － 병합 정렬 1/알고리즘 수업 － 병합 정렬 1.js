const filePath = process.platform === "linux" ? "dev/stdin" : "19_재귀/24060.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let ans = -1;
const mergeSort = (A, p, r) => {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
};
const merge = (A, p, q, r) => {
  let i = p;
  let j = q + 1;
  let t = 0;
  const tmp = [];
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }
  while (i <= q) {
    tmp[t++] = A[i++];
  }
  while (j <= r) {
    tmp[t++] = A[j++];
  }
  i = p;
  t = 0;
  while (i <= r) {
    A[i] = tmp[t];
    if (--k === 0) {
      ans = tmp[t];
    }
    i++;
    t++;
  }
};
mergeSort(arr, 0, n - 1);
console.log(k > 0 ? -1 : ans);