function solution(clothes) {
    const hashMap = {}
    var ans = 1;
    
    clothes.forEach((v,i)=>{
        const [type, name] = v;
        
        if(hashMap.hasOwnProperty(name)) {
            hashMap[name]++
        } else hashMap[name] = 1
    })
    
    for(const key in hashMap){
        ans *= (hashMap[key] + 1)
    }
    
    console.log(ans)
    return ans-1;
}