function solution(s) {
    let cnt = 0;
    let zerocnt = 0;
    
    while(s!=='1'){
        cnt += 1;
        
        zerocnt += s.match(/0/g)? s.match(/0/g).length : 0
        s = s.replace(/0/g,"").length.toString(2)
    }
    return [cnt, zerocnt];
}