function solution(s)
{
    const stack = [];
    for(let i=0; i<s.length; i++){
        const cur = s.charAt(i);
        if(stack[stack.length-1] === cur){
            stack.pop()
        }else{
            stack.push(cur);
        }
    }
    return stack.length===0? 1: 0;
}