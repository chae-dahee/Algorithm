function solution(n) {
    var ans = Array.from({length: n},(_,i)=>Array(i+1).fill(0));
    let x = -1;
    let y = 0;
    let num = 1;
    
    for(let i=0; i<n; i++){
        if(i%3 === 0){
            for(let j=i; j<n; j++){
                x++
                ans[x][y] = num++
            }
        }else if(i%3 === 1){
             for(let j=i; j<n; j++){
                y++
                ans[x][y] = num++
            }
        }else if(i%3 === 2){
             for(let j=i; j<n; j++){
                x--
                 y--
                ans[x][y] = num++
            }
        }
    }
    
    return ans.flat();
}