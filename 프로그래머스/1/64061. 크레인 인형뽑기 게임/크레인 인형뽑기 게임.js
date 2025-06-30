function solution(board, moves) {
    let count = 0;
    const basket = [];

    const N = board.length; 

    for (const move of moves) {
        const columnIndex = move - 1;
        let picked = 0; 
        
        for (let rowIndex = 0; rowIndex < N; rowIndex++) {
            if (board[rowIndex][columnIndex] !== 0) { //인형이 있는 경우
                picked = board[rowIndex][columnIndex];
                board[rowIndex][columnIndex] = 0; //빈칸으로 만듬
                break;
            }
        }
        //고른 인형, 바구니 마지막 인형 비교
        if(picked !== 0){
            if (basket.length > 0 && basket[basket.length - 1] === picked) {
                basket.pop();
                count += 2;
            } else {
                basket.push(picked);
            }
        }
    }
    return count;
}