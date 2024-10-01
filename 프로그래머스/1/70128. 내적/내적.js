function solution(a, b) {
    var ans = 0;
    for(let i=0; i<a.length; i++){
        let temp = a[i]*b[i]
        ans += temp
    }
    return ans;
}