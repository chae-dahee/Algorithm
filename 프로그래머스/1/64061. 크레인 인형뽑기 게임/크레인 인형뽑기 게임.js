function solution(board, moves) {
    let removedCount = 0;
    const basket = [];

    const N = board.length; 

    for (const move of moves) {
        const columnIndex = move - 1;
        let pickedDoll = 0; 
        
        for (let rowIndex = 0; rowIndex < N; rowIndex++) {
            if (board[rowIndex][columnIndex] !== 0) {
                pickedDoll = board[rowIndex][columnIndex];
                board[rowIndex][columnIndex] = 0;
                break;
            }
        }

        if (pickedDoll !== 0) {
            if (basket.length > 0 && basket[basket.length - 1] === pickedDoll) {
                basket.pop();
                removedCount += 2;
            } else {
                basket.push(pickedDoll);
            }
        }
    }
    return removedCount;
}