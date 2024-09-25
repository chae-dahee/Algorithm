function solution(n, arr1, arr2) {
    var answer = [];
    
    arr1.map((val,idx)=>{
        answer.push((val | arr2[idx] ).toString(2).padStart(n, "0"))
    })
    
    return answer.join(",").replace(/1/g,'#').replace(/0/g," ").split(",");
}