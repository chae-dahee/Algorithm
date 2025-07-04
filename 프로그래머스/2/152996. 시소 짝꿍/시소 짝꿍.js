function solution(weights) {
    var answer = 0;
    const weightCnt = new Map();
    for(const w of weights){
        weightCnt.set(w, (weightCnt.get(w) || 0) + 1);
    }
    const dist = [2,3,4];
    
    for(const [weight, count] of weightCnt.entries()) {
        if (count > 1) {
            answer += (count * (count - 1)) / 2;
        }

        for (const d1 of dist) {
            for (const d2 of dist) {
                if (d1 === d2) continue; 
                
                if ((weight * d1) % d2 !== 0) continue; 
                
                const targetWeight = (weight * d1) / d2;
                
                if (targetWeight > weight) {
                    if (weightCnt.has(targetWeight)) {
                        answer += count * weightCnt.get(targetWeight);
                    }
                }
            }
        }
    }
    return answer;
}