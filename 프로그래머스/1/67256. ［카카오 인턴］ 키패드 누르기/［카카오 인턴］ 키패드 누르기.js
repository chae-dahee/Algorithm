function solution(numbers, hand) {
    let answer = '';
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    let left = keypad['*'];
    let right = keypad['#'];
    
    const getDistance = (pos1, pos2) => {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }
    
    for(const num of numbers){
        const target = keypad[num];
        
        if([1, 4, 7].includes(num)){
            answer += 'L';
            left = target;
        }
        else if([3, 6, 9].includes(num)){
            answer += 'R';
            right = target;
        }else{
            const distLeft = getDistance(left, target);
            const distRight = getDistance(right, target);
            
            if(distLeft < distRight){
                answer += 'L';
                left = target;
            }else if(distLeft > distRight){
                answer += 'R';
                right = target;
            }else{
                if(hand === 'right'){
                    answer += 'R';
                    right = target;
                }else if(hand === 'left'){
                    answer += 'L';
                    left = target;
                }
            }
        }
    }
    
    return answer;
}