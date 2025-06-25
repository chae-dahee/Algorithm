function solution(price, money, count) {
    var answer = 0;
    for(let i=1; i<=count; i++){
        answer += price*i
    }
    const dist = answer - money;
    return dist >= 0 ? dist : 0;
}