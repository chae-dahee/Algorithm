function solution(m, n, board) {
    var cnt = 0;
    let arr = board.map(row => row.split(""))
    
    while(true){
        let removeSet = new Set();
        for(let r = 0; r < m - 1; r++){
            for(let c = 0; c < n - 1; c++){
                if(arr[r][c] === '0') continue;
                if(arr[r][c] === arr[r+1][c] && //아래 블록
                   arr[r][c] === arr[r][c+1] && //오른쪽 블록
                   arr[r][c] === arr[r+1][c+1] /// 오른쪽 아래 (대각선)블록
                  ){
                    removeSet.add(`${r},${c}`);
                    removeSet.add(`${r + 1},${c}`);
                    removeSet.add(`${r},${c + 1}`);
                    removeSet.add(`${r + 1},${c + 1}`);
                }
            }
        }
        if(removeSet.size === 0) break;
        cnt += removeSet.size;
        
        //블록 제거 -> 0
        for(let pos of removeSet){
            let [r,c] = pos.split(',').map(Number);
            arr[r][c] = '0'
        }
        
        //낙하
        for(let c = 0; c < n; c++){
            let writeRow = m - 1; 
            for (let readRow = m - 1; readRow >= 0; readRow--) {
                if (arr[readRow][c] !== '0') {
                    if (writeRow !== readRow) {
                        arr[writeRow][c] = arr[readRow][c];
                        arr[readRow][c] = '0';
                    }
                    writeRow--;
                }
            }
        }
    }
    
    return cnt;
}