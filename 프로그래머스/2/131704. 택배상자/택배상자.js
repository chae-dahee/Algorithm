function solution(order) {
    var cnt = 0;
    let idx = 1;
    let stack = [];
    
    for(let i=0; i<order.length; i++){
        while(idx <= order[i]){
            stack.push(idx);
            idx++
        }
        if(stack.length >0 && stack[stack.length-1] === order[i]){
            stack.pop()
            cnt++
        }else break
    }
    
    return cnt;
}