function solution(n, t, m, p) {
    let answer = '';
    let num = 0;
    let idx = 0;
    while(answer.length < t){
        const curNumStr = num.toString(n)
        for(let i=0; i < curNumStr.length; i++){
            if(idx % m === p - 1){
                answer += curNumStr[i] 
                if(answer.length === t) break;
            }
            idx++;
        }
        if(answer.length === t) break;
        num++;
    }

    return answer.toUpperCase();
}