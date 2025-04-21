//귤 개수 k
//서로 다른 종류 최소
//배열에서 k 개 만큼 뽑아낼것
//크기순 나열, 중복인 개수 파악해서
//종류 ans
function solution(k, tangerine) {
    var ans = 0;
    let dict = {}
    
    tangerine.map((val)=>{
        dict[val] = (dict[val]||0)+1
    });
    
    let arr = Object.values(dict).sort((a,b)=>b-a);
    for(const x of arr){
        ans++;
        if(k>x) k-=x;
        else break;
    }
        
    return ans;
}