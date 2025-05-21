const filePath = process.platform === "linux" ? "dev/stdin" : "16_스택큐덱/18258.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  removeFirst() {
    if (!this.head) return null;
    const temp = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return temp.data;
  }
  get size() {
    return this.length;
  }
  get lastNode() {
    if (!this.tail) return null;
    return this.tail.data;
  }
}
class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }
  enqueue(data) {
    this.linkedList.append(data);
  }
  dequeue() {
    return this.linkedList.removeFirst();
  }
  peek() {
    if (!this.linkedList.head) return null;
    return this.linkedList.head.data;
  }
  get length() {
    return this.linkedList.size;
  }
  get lastNode() {
    return this.linkedList.lastNode;
  }
}
const n = Number(input.shift());
const queue = new Queue();
let ans = "";
for (let i = 0; i < n; i++) {
  const [command, num] = input[i].split(" ");
  switch (command) {
    case "push":
      queue.enqueue(num);
      break;
    case "pop":
      if (queue.length === 0) {
        ans += "-1\n";
      } else {
        ans += queue.dequeue() + "\n";
      }
      break;
    case "size":
      ans += queue.length + "\n";
      break;
    case "empty":
      ans += `${queue.length === 0 ? "1" : "0"}\n`;
      break;
    case "front":
      ans += `${queue.length === 0 ? "-1" : queue.peek()}\n`;
      break;
    case "back":
      ans += `${queue.length === 0 ? "-1" : queue.lastNode}\n`;
      break;
  }
}
console.log(ans);