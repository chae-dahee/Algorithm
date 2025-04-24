function solution(skill, skill_trees) {
    let cnt = skill_trees.length
    
    for(let i=0; i<skill_trees.length; i++){
        const skillStack = [...skill]
        
        for(let j=0; j<skill_trees[i].length; j++){
            if(!skill.includes(skill_trees[i][j])) continue
            if(skillStack.shift() !== skill_trees[i][j]){
                cnt -= 1
                break
            }
        }    
    }
    
    return cnt;
}