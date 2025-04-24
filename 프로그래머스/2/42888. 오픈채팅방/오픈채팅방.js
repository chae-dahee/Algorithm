function solution(record) {
    var ans = [];
    const map = new Map()
    
    record.forEach(e=>{
        const state = e.split(' ')
        if(state[0]==='Enter'||state[0]==='Change'){
           map.set(state[1], state[2])
       }
    })
    record.forEach(e=>{
        const state = e.split(' ')
        let name = map.get(state[1])
        if(state[0]==='Enter'){
            ans.push(`${name}님이 들어왔습니다.`)
        }
        else if(state[0]==='Leave'){
            ans.push(`${name}님이 나갔습니다.`)
        }
    })
    
    return ans;
}