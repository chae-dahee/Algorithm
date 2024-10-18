//2명, 무게제한
//poeple 을 최소순으로 정렬한다.
//최소와 최대의 합이 limit 보다 클 경우 > 최대만 태운다 
function solution(people, limit) {
    var ans = 0;
    people.sort((a,b)=>a-b)
    
    while(people.length){
        if(people[0]+people.at(0-1) >limit){
            people.pop()
            ans++
        }else{
            people.pop()
            people.shift()
            ans++
        }    
    }
    return ans;
}