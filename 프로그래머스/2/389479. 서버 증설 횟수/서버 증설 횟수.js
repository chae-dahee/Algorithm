function solution(players, m, k) {
    let cnt = 0;
    let serverEndTimes = [];

    for (let hour = 0; hour < 24; hour++) {
        serverEndTimes = serverEndTimes.filter(endTime => endTime > hour);

        const currentOperatingServers = serverEndTimes.length;
        const requiredServers = Math.floor(players[hour] / m);
        const serversToProvision = requiredServers - currentOperatingServers;

        if (serversToProvision > 0) {
            cnt += serversToProvision;
            for (let i = 0; i < serversToProvision; i++) {
                serverEndTimes.push(hour + k);
            }
        }
    }
    return cnt;
}