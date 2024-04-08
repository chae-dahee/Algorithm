const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [p, m] = input[0].split(' ').map(Number);
const players = input.slice(1).map(val => {
    const [level, name] = val.split(' ');
    return { level: parseInt(level), name };
});
function matching(p, m, players) {
    const rooms = [];
    for (const player of players) {
        let matched = false;
        for (const room of rooms) {
            if (room.length < m && Math.abs(room[0].level - player.level) <= 10) {
                room.push(player);
                matched = true;
                break;
            }
        }
        if (!matched) {
            rooms.push([player]);
        }
    }
    for (const room of rooms) {
        console.log(room.length === m ? 'Started!' : 'Waiting!');
        room.sort((a, b) => a.name.localeCompare(b.name));
        for (const player of room) {
            console.log(`${player.level} ${player.name}`);
        }
    }
}
matching(p, m, players);