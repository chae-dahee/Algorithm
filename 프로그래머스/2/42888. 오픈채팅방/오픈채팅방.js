function solution(record) {
    var ans = [];
    const uids = new Map()
    
    record.forEach(e=>{
        let [command, uid, nick] = e.split(' ')
        if(command==='Enter'||command==='Change'){
           uids.set(uid, nick)
       }
    })
    record.forEach(e=>{
        const [command, uid] = e.split(' ')
        if(command==='Enter'){
            ans.push(`${uids.get(uid)}님이 들어왔습니다.`)
        }
        if(command==='Leave'){
            ans.push(`${uids.get(uid)}님이 나갔습니다.`)
        }
    })
    
    return ans;
}