const filePath = process.platform === "linux" ? "dev/stdin" : "14_집합맵/1620.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const pokemon = input.slice(1, n + 1);
const check = input.slice(n + 1);
const pokemonMap = new Map();
for (let i = 0; i < n; i++) {
  pokemonMap.set(pokemon[i], i + 1);
}
console.log(
  check
    .map((v) => (pokemonMap.has(v) ? pokemonMap.get(v) : pokemon[v - 1]))
    .join("\n")
);