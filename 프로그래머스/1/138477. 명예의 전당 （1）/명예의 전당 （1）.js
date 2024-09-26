//score 을 forEach 돌리면서
//val 값을 num 에 push 한다음
//num 정렬 + k 자름
//ans 에 num.Min 값 push
function solution(k, score) {
    var ans = [];
    var num = [];
    
    score.forEach((val)=>{
        num.push(val);
        num.sort((a,b)=>b-a).splice(k);
        
        ans.push(Math.min(...num))
    })
    return ans;
}