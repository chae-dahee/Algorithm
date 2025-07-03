function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array.from({length: n + 1},()=> Array(m + 1).fill(0))
    //웅덩이 -1
    for(const [puddleM, puddleN] of puddles) dp[puddleN][puddleM] = -1
    dp[1][1] = 1 //집
    
    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(dp[i][j] === -1){
                dp[i][j] = 0;
                continue;
            }
            if(i === 1 && j === 1) continue; 
            let top = (i > 1 && dp[i-1][j] !== -1) ? dp[i-1][j] : 0;
            let left = (j > 1 && dp[i][j-1] !== -1) ? dp[i][j-1] : 0;
            dp[i][j] = (top + left) % MOD;
        }
    }
    
    return dp[n][m];
}