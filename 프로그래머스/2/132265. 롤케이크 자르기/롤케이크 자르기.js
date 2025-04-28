function solution(topping) {
    var ans = 0;
    const left = new Map();
    const right = new Map();
    
    for(const t of topping){
        right.set(t, (right.get(t)||0)+1)
    }
    
    for(let i=0; i<topping.length-1; i++){
        const t = topping[i]
        left.set(t, (left.get(t)||0)+1)
        
        right.set(t, right.get(t)-1)
        if(right.get(t)===0) right.delete(t)
        if(left.size === right.size) ans++
    }
    
    return ans;
}