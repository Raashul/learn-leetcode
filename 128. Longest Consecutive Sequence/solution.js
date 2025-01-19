/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums)
    let max = 0
    for(const val of numSet) {
        if(!numSet.has(val-1)) {
            let newVal = val
            let count = 0
            while(numSet.has(newVal)) {
                count++
                newVal++
            }
            max = Math.max(max, count)

        }
    }
    
    return max
};


console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
