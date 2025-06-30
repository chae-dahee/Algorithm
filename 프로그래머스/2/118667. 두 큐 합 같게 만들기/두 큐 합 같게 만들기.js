function solution(queue1, queue2) {
    const combinedQueue = [...queue1, ...queue2];
    const n = queue1.length;

    let sum1 = queue1.reduce((acc, val) => acc + val, 0);
    let sum2 = queue2.reduce((acc, val) => acc + val, 0);
    const totalSum = sum1 + sum2;

    if (totalSum % 2 !== 0) return -1;
    
    const targetSum = totalSum / 2;
    let ptr1 = 0;
    let ptr2 = n;
    let operations = 0;

    const maxOperations = n * 3;
    
    while (sum1 !== targetSum && operations < maxOperations) {
        if (sum1 < targetSum) {
            sum1 += combinedQueue[ptr2];
            sum2 -= combinedQueue[ptr2];
            ptr2++;
        }
        else {
            sum1 -= combinedQueue[ptr1];
            sum2 += combinedQueue[ptr1]; 
            ptr1++; 
        }
        operations++; 
    }

    return sum1 === targetSum ? operations : -1;
}