function solution(prices) {    
    return prices.map((e,i)=>{
        for(let j=i+1; j<prices.length; j++){
            if(prices[j]<e) return j-i
        }
        return prices.length -i -1
    })
}

//배열 for문 순회하면서 현재 나 val 값 이후 배열인덱스 작은 val 의 idx 찾음. 작은 val idx - 나의 idx -> 스택에 넣음
