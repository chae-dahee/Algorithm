/**
 * @param {number[]} flowerbed
 * @param {number} n 심어야하는 꽃의 개수
 * @return {boolean} 연속으로 심기 불가능
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0) return true
    let cnt = 0
    for(let i=0; i<flowerbed.length; i++){
        if(flowerbed[i] === 0){
            const leftEmpty = (i === 0) || (flowerbed[i - 1] === 0);
            const rightEmpty = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);
            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1;
                cnt++;
                if (cnt >= n) {
                     return true;
                }
            }
        }
    }
    return false;
}