function solution(str1, str2) {
    var ans = 0;
    const arr1 = makeStr(str1)
    const arr2 = makeStr(str2)
    if(arr1.length ===0 && arr2.length ===0) return 65536
    
    let intersection = []
    let union = []
    
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){
            const idx = arr2.indexOf(arr1[i])
            arr2.splice(idx,1)
            intersection.push(arr1[i])
        }else{
            union.push(arr1[i])
        }
    }
    arr2.forEach(e=>union.push(e))
    
    return Math.floor((intersection.length/(intersection.length + union.length))*65536)
    
    return ans;
}

function makeStr(str){
    const arr=[]
    const regex = /[\W0-9_]/
    str.split('')
    
    for(let i = 1 ; i < str.length; i ++) {
        const elem = str[i-1] + str[i];
        if(regex.test(elem)) continue;
        arr.push(elem.toLowerCase());
    }
    return arr
}