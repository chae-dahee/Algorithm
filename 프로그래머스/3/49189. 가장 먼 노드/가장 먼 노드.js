function solution(n, edge) {
    const graph = Array.from({ length: n + 1}, ()=>[]);
    
    edge.forEach(([a,b])=>{
        graph[a].push(b);
        graph[b].push(a);
    })
    
    const distance = new Array(n + 1).fill(-1);
    const queue = [];
    
    queue.push(1);
    distance[1] = 0
    let head = 0;
    
    while(head < queue.length){
        const cur = queue[head++]
        
        for(const neighbor of graph[cur]){
            if(distance[neighbor] === -1){
                distance[neighbor] = distance[cur] + 1;
                queue.push(neighbor)
            }
        }
    }
    
    let max = 0;
    for(let i=1; i<=n; i++){
        if(distance[i] > max) max = distance[i];
    }
    
    let cnt = 0;
    for(let i=1; i<=n; i++){
        if(distance[i] === max) cnt++;
    }
    
    return cnt
}
