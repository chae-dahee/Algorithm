class TrieNode {
  constructor() {
    this.children = new Map();
    this.wordCount = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(nickname) {
    const _insertRecursive = (node, currentNickname, index) => {
      if (index === currentNickname.length) {
        node.wordCount++;
        return currentNickname + (node.wordCount === 1 ? "" : node.wordCount);
      }

      const char = currentNickname[index];

      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
        _insertRecursive(node.children.get(char), currentNickname, index + 1);
        return currentNickname.substring(0, index + 1);
      }

      return _insertRecursive(
        node.children.get(char),
        currentNickname,
        index + 1
      );
    };

    return _insertRecursive(this.root, nickname, 0);
  }
}

function solve() {
  const filePath = process.platform === "linux" ? "/dev/stdin" : "찬호스쿨_0708/16934.txt";

  const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

  const N = parseInt(input[0]);
  const nicknames = input.slice(1, N + 1);

  const trie = new Trie();

  for (const nickname of nicknames) {
    const alias = trie.insert(nickname);
    console.log(alias);
  }
}

solve();