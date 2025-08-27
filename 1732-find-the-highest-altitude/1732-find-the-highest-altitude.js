/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let cur = 0;
    for(let i=0; i<gain.length; i++){
        cur += gain[i];
        max = Math.max(max, cur)
    }
    return max
};