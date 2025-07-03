function solution(name) {
    let upCnt = 0;
    const len = name.length
    
    for(let alpha of name){
        upCnt += Math.min(alpha.charCodeAt(0) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - alpha.charCodeAt(0)+1)
    }
    
    let leftCnt = len - 1;
    
    for(let i=0; i<len; i++){
        let next = i + 1
        while(next < len && name[next] === 'A') next++
        
        const moveRightLeft = i * 2 + (len - next);
        const moveLeftRight = i + (len - next) * 2;
        
        leftCnt = Math.min(leftCnt, moveRightLeft, moveLeftRight)
    }
    return upCnt + leftCnt;
}