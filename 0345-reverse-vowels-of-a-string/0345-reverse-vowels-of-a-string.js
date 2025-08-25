/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowles = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = s.split('');

    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        while(!vowles.has(arr[left])) left++;
        while(!vowles.has(arr[right])) right--;
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};