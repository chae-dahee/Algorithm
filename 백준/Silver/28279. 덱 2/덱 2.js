const filePath = process.platform === "linux" ? "dev/stdin" : "16_스택큐덱/28279.txt";
const fs = require("fs");
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const n = 1000000;
let ans = "";
const deque = new Array(n);
let size = 0;
let front, rear = -1;
const addFront = (x) => {
  if (size === 0) {
    front = 0;
    rear = 0;
  } else {
    if (front === 0) {
      front = n - 1;
    } else {
      front--;
    }
  }
  deque[front] = x;
  size++;
};
const addLast = (x) => {
  if (size === 0) {
    front = 0;
    rear = 0;
  } else {
    if (rear === n - 1) {
      rear = 0;
    } else {
      rear++;
    }
  }
  deque[rear] = x;
  size++;
};
const removeFront = () => {
  ans += deque[front] + "\n";
  size--;
  if (front === n - 1) {
    front = 0;
  } else {
    front++;
  }
};
const removeBack = () => {
  ans += deque[rear] + "\n";
  size--;
  if (rear === 0) {
    rear = n - 1;
  } else {
    rear--;
  }
};
arr.forEach((v) => {
  const [command, num] = v.split(" ").map(Number);
  switch (command) {
    case 1:
      addFront(num);
      break;
    case 2:
      addLast(num);
      break;
    case 3:
      size !== 0 ? removeFront() : (ans += -1 + "\n");
      break;
    case 4:
      size !== 0 ? removeBack() : (ans += -1 + "\n");
      break;
    case 5:
      ans += size + "\n";
      break;
    case 6:
      size !== 0 ? (ans += 0 + "\n") : (ans += 1 + "\n");
      break;
    case 7:
      size !== 0 ? (ans += deque[front] + "\n") : (ans += -1 + "\n");
      break;
    case 8:
      size !== 0 ? (ans += deque[rear] + "\n") : (ans += -1 + "\n");
      break;
  }
});
console.log(ans);