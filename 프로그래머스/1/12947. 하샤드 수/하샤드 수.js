function solution(x) {
    let ans = 0;
    const xStr = String(x)
    
    for(let i=0; i<xStr.length; i++){
        ans += Number(xStr[i])
    }
    return x%ans===0?true:false;
}