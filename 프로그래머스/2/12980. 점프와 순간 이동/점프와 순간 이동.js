function solution(n) {
    let answer = 0;
    while(n !== 0){
        if(n % 2 === 0){
            n = n / 2;
            continue;
        } 
        if(n % 2 === 1){
            n = (n - 1) / 2;
            answer++;
        } 
    }
    return answer;
}