const filePath = process.platform === "linux" ? "/dev/stdin" : "찬호스쿨_0729/20006.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [p, m] = input[0].split(" ").map(Number);
const players = input.slice(1).map((val) => {
  const [level, name] = val.split(" ");
  return { level: Number(level), name };
});

const rooms = [];

for (const player of players) {
  let joined = false;
  for (const room of rooms) {
    if (room.length < m && Math.abs(player.level - room[0].level) <= 10) {
      room.push(player);
      joined = true;
      break;
    }
  }

  if (!joined) rooms.push([player]);
}

for (const room of rooms) {
  console.log(room.length >= m ? "Started!" : "Waiting!");

  room.sort((a, b) => a.name.localeCompare(b.name));
  room.forEach((player) => console.log(`${player.level} ${player.name}`));
}