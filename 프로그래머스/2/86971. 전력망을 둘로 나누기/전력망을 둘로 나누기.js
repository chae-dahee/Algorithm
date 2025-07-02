function solution(n, wires) {
    var minDiff = Infinity;
    
    const graph = Array.from({length: n + 1},()=>[])
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    });
    for (const [cutV1, cutV2] of wires) {
        const count1 = dfs(cutV1, cutV2, n, graph);
        const count2 = n - count1; 
        
        minDiff = Math.min(minDiff, Math.abs(count1 - count2));
    }

    return minDiff;
}

function dfs(startNode, visitedNode, n, graph) {
    let count = 0;
    const visited = new Array(n + 1).fill(false);
    const stack = [startNode];
    
    visited[startNode] = true;
    count++;

    while (stack.length > 0) {
        const current = stack.pop();

        for (const neighbor of graph[current]) {
            if (!visited[neighbor] && neighbor !== visitedNode) {
                visited[neighbor] = true;
                count++;
                stack.push(neighbor);
            }
        }
    }
    return count;
}