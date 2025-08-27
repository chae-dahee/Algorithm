/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const filterNum1 = Array.from(set1).filter((num)=> !set2.has(num))
    const filterNum2 = Array.from(set2).filter((num)=> !set1.has(num))

    return [filterNum1, filterNum2]
};