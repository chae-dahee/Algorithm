/**
 * @param {number[]} flowerbed
 * @param {number} n 심어야하는 꽃의 개수
 * @return {boolean} 연속으로 심기 불가능
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0) return true
    let cnt = 0
    let fb = [...flowerbed]

    for(let i=0; i<fb.length; i++){
        if(fb[i] === 0){
            const leftEmpty = (i === 0) || (fb[i - 1] === 0);
            const rightEmpty = (i === fb.length - 1) || (fb[i + 1] === 0);
            
            if (leftEmpty && rightEmpty) {
                fb[i] = 1;
                cnt++;
                if (cnt >= n) {
                     return true;
                }
            }
        }
    }
    return false;
}