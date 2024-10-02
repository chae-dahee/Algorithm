function solution(name, yearning, photo) {
    var ans = {};
    for (let i=0; i<name.length; i++){
       ans[name[i]] = yearning[i];
    }
    return photo.map((val)=>
        val.reduce((acc,cur)=>acc + (ans[cur]||0), 0)
    );
}