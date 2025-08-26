/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = s.split(' ')
    let ans = word.filter(Boolean)
    return ans.reverse().join(' ')
};