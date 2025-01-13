//https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=rabvlt31
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMapping = new Map()

    for(let i =0; i < nums.length;i++) {
        let requiredVal = target - nums[i]
         if (numsMapping.has(requiredVal)) {
            return [numsMapping.get(requiredVal), i];
        }
        numsMapping.set(nums[i], i)
    }
    return [];
};