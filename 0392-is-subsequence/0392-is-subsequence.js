/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0) return true;

    let si = 0 //s index
    let ti = 0 //t index

    while(ti < t.length){
        if(s[si] === t[ti]) si++;
        ti++;
        if(si === s.length) return true
    }
    return false
};