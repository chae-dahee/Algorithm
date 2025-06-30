function solution(queue1, queue2) {
    const combinedQueue = [...queue1, ...queue2];
    const n = queue1.length;

    let sum1 = queue1.reduce((acc, val) => acc + val, 0);
    let sum2 = queue2.reduce((acc, val) => acc + val, 0);
    const totalSum = sum1 + sum2;
    
    const targetSum = totalSum / 2;
    const maxCount = n * 3; //최악 횟수
    if (totalSum % 2 !== 0) return -1;
    
    //양끝에서부터 시작
    let ptr1 = 0;
    let ptr2 = n;
    let count = 0;

    while (sum1 !== targetSum && count < maxCount) {
        if (sum1 < targetSum) {
            sum1 += combinedQueue[ptr2];
            sum2 -= combinedQueue[ptr2];
            ptr2++;
        }
        else { //큰 경우
            sum1 -= combinedQueue[ptr1];
            sum2 += combinedQueue[ptr1]; 
            ptr1++; 
        }
        count++; 
    }

    return sum1 === targetSum ? count : -1;
}